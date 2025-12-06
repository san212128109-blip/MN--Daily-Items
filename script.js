// Role Selection
function selectRole(role) {
  document.getElementById('role-selection').classList.add('hidden');
  if(role==='admin'){
    document.getElementById('admin-login').classList.remove('hidden');
  } else {
    document.getElementById('home-page').classList.remove('hidden');
    loadProducts();
  }
}

// Job Seeker -> WhatsApp
function jobSeeker(){
  window.open('https://wa.me/01913821910','_blank');
}

// Admin Login
document.getElementById('adminForm').addEventListener('submit', function(e){
  e.preventDefault();
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  const error = document.getElementById('adminError');
  if(user==='Daily' && pass==='nafis128!@*'){
    document.getElementById('admin-login').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
    error.textContent='';
    renderAdminProducts();
  } else {
    error.textContent='Invalid User ID or Password!';
  }
});

// Admin Logout
function logoutAdmin(){
  document.getElementById('admin-dashboard').classList.add('hidden');
  document.getElementById('role-selection').classList.remove('hidden');
}

// Products
let products = [
  {id:1,name:"Rice 5kg",price:20,img:"https://via.placeholder.com/150"},
  {id:2,name:"Sugar 2kg",price:10,img:"https://via.placeholder.com/150"},
  {id:3,name:"Milk 1L",price:5,img:"https://via.placeholder.com/150"},
];

let cart = [];

// Load Products for Customer
function loadProducts(){
  const grid = document.getElementById('product-grid');
  grid.innerHTML='';
  products.forEach(p=>{
    const div=document.createElement('div');
    div.className='product-card';
    div.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

// Cart Functions
function addToCart(id){
  const p = products.find(x=>x.id===id);
  const item = cart.find(x=>x.id===id);
  if(item){item.qty+=1;}else{cart.push({...p,qty:1});}
  updateCart();
}
function updateCart(){
  const section=document.getElementById('cart-section');
  section.classList.remove('hidden');
  const container=document.getElementById('cart-items');
  container.innerHTML='';
  let total=0;
  cart.forEach(i=>{
    total+=i.price*i.qty;
    const div=document.createElement('div');
    div.className='cart-item';
    div.innerHTML=`<span>${i.name} x ${i.qty}</span><span>$${i.price*i.qty}</span><button onclick="removeFromCart(${i.id})">Remove</button>`;
    container.appendChild(div);
  });
  document.getElementById('cart-total').textContent=total;
}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);updateCart();}
function checkout(){if(cart.length===0){alert('Cart is empty!');return;} alert('Thank you for your purchase!'); cart=[];updateCart();}

// Admin Product Management
function renderAdminProducts(){
  const container=document.getElementById('admin-products');
  container.innerHTML='';
  products.forEach(p=>{
    const div=document.createElement('div');
    div.className='admin-product';
    div.innerHTML=`
      <img src="${p.img}" alt="${p.name}" style="width:100%">
      <strong>${p.name}</strong>
      <p>$${p.price}</p>
      <button onclick="deleteProduct(${p.id})">Delete</button>
    `;
    container.appendChild(div);
  });
}

// Add Product or Hero Content
function addContent() {
  const name = document.getElementById('newName').value;
  const price = Number(document.getElementById('newPrice').value);
  const img = document.getElementById('newImg').value;
  const type = document.getElementById('contentType').value;

  if (!name || !img) { alert('Fill all fields'); return; }

  if(type==='product'){
    const id = products.length ? products[products.length-1].id + 1 : 1;
    products.push({id,name,price,img});
    renderAdminProducts();
    loadProducts();
  } else if(type==='hero'){
    const heroSection = document.getElementById('hero-admin-content');
    const div = document.createElement('div');
    div.innerHTML = `<h2>${name}</h2><img src="${img}" alt="${name}" style="max-width:200px;">`;
    heroSection.appendChild(div);
  }

  // Clear input fields
  document.getElementById('newName').value = '';
  document.getElementById('newPrice').value = '';
  document.getElementById('newImg').value = '';
}
