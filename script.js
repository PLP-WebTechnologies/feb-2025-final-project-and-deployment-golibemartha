function showRecipeDetails(recipeId) {
  const recipes = {
    jollofRice: 'Rinse and parboil rice. Blend tomatoes, red bell pepper, and onions, then fry the mixture in oil with seasoning cubes, curry, and thyme. Add rice, water, and bay leaf. Cook until rice is soft and sauce is absorbed. Serve hot.',
    noodles: 'Boil noodles in water for 2 to 3 minutes. Add seasoning, vegetables, and stir fry with a little oil for extra flavor.',
    plantainEggs: 'Peel and slice ripe plantains, then fry in hot oil until golden. Whisk eggs with onions, pepper and salt, then scramble in a pan. Serve together for a quick delicious meal.',
    yamPorridge: 'Boil yam chunks in sauce made with palm oil, onions, and pepper.',
    moiMoi: 'Blend beans with onions and pepper. Steam in containers until firm.',
    okroSoup: 'Chop okro, cook with oil, pepper, crayfish and vegetables.'
  };

  alert(recipes[recipeId]);
}


document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    toggleBtn.textContent = document.body.classList.contains('darkMode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
});

