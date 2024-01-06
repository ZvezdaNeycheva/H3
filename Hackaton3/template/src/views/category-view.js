export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category-single">
<h2>${category.name}</h2>
  <p> ${category.moviesCount}</p>
  <button  class='btnn' id="${category.id}">view category</button> 
  
</div>  
`;
