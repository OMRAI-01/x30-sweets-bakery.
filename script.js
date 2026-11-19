const KEY = 'x30Orders';
const form = document.getElementById('orderForm');
const list = document.getElementById('orderList');
const item = document.getElementById('item');
const qty = document.getElementById('qty');
const totalEl = document.getElementById('total');
const dateEl = document.getElementById('date');
dateEl.min = new Date().toISOString().split('T')[0];

function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

function estimate() {
  const t = (Number(item.value) || 0) * (Number(qty.value) || 0);
  totalEl.textContent = t;
  return t;
}
function render() {
  list.innerHTML = '';
  const orders = load();
  if (!orders.length) { list.innerHTML = '<li>No orders yet. Fill the form above to add one.</li>'; return; }
  orders.forEach((o, i) => {
    const li = document.createElement('li');
    li.className = 'card-sweet p-2 mb-2';
    const txt = document.createElement('span');
    txt.textContent = `${o.name}: ${o.qty} x ${o.itemName} on ${o.date}${o.eggless ? ' (eggless)' : ''} = Rs ${o.total}`;
    const del = document.createElement('button');
    del.className = 'btn btn-sm btn-outline-danger';
    del.textContent = 'Remove';
    del.addEventListener('click', () => { const a = load(); a.splice(i, 1); save(a); render(); });
    li.append(txt, del);
    list.appendChild(li);
  });
}
item.addEventListener('change', estimate);
qty.addEventListener('input', estimate);
document.getElementById('sweet').addEventListener('input', e => document.getElementById('sweetOut').textContent = e.target.value);

form.addEventListener('submit', e => {
  e.preventDefault();
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;
  const o = {
    name: document.getElementById('name').value.trim(),
    itemName: item.options[item.selectedIndex].text.replace(/ \(Rs.*\)/, ''),
    qty: Number(qty.value), date: dateEl.value,
    eggless: document.getElementById('eggless').checked, total: estimate()
  };
  const a = load(); a.push(o); save(a);
  form.reset(); form.classList.remove('was-validated');
  document.getElementById('sweetOut').textContent = 3; estimate(); render();
});
document.getElementById('clearBtn').addEventListener('click', () => { save([]); render(); });
estimate(); render();
