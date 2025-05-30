function showRecipeDetails(recipeId) {
  const recipes = {
    jollofRice: 'Rinse and parboil rice. Blend tomatoes, red bell pepper, and onions, then fry the mixture in oil with seasoning cubes, curry, and thyme. Add rice, water, and bay leaf. Cook until rice is soft and sauce is absorbed. Serve hot.',
    noodles: 'Boil noodles in water for 2 to 3 minutes. Add seasoning, vegetables, and stir fry with a little oil for extra flavor.',
    plantainEggs: 'Peel and slice ripe plantains, then fry in hot oil until golden. Whisk eggs with onions, pepper and salt, then scramble in a pan. Serve together for a quick delicious meal.',
  };

  alert(recipes[recipeId]);
}

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const navMenu = document.querySelector('.navMenu');

  menu.addEventListener('click', function () {
    navMenu.classList.toggle('visible'); 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    toggleBtn.textContent = document.body.classList.contains('darkMode') ? '☀️' : '🌙';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Thank you for subscribing to our newsletter!');
    submitButton.disabled = true; 
    submitButton.textContent = 'Subscribed'; 
    submitButton.style.backgroundColor = 'gray';
    submitButton.style.color = 'white';
    form.reset(); 
  });
});