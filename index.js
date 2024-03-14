let container = document.getElementById("container");
let row = document.getElementById("row");
let divrow = document.getElementById("div-row");
let data;

//Fetch Post API

const fetchData = async () => {
  try {
    getData = await fetch(
      "https://owlapplicationbuilder.com/api/entities/customwebsiteclub/blog/get_all_en?page=1&page_size=15&fld=_id&srt=-1&to_search={}&t=true"
    );
    response = await getData.json();
    data = response.data;
    console.log(data);
    getAllBlogCategories(data);
    displayDefaultCategory(data);
  } catch (error) {
    console.log("ERROR", error);
  }
};
fetchData();

let getAllBlogCategories = (data) => {
  let array = [];
  data.forEach((element) => {
    let blog_category = element.blog_category;
    console.log(blog_category);
    array.push(blog_category);
  });
  let arraysort = array.sort();
  const finalArray = arraysort.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  console.log(finalArray);
  finalArray.forEach((element) => {
    let blogCategoryName = document.createElement("div");
    blogCategoryName.classList.add("col-lg-3","col-md-6","col-sm-6","my-3");
    blogCategoryName.innerHTML = `
    <button type="button" class="btn btn-primary" onclick="displayCategory('${element}')">${element}</button>
  `;
  row.appendChild(blogCategoryName);

  
  });
//get all category button
let getALLCategoriesButton = document.createElement("div");
getALLCategoriesButton.classList.add("col-lg-3","col-md-6","col-sm-6","my-3");
getALLCategoriesButton.innerHTML = `
<button type="button" class="btn btn-primary" onclick="displayAllCategories(data)">Get All Categories</button>
`;
    row.appendChild(getALLCategoriesButton);
};
//display default-category

function displayDefaultCategory(data) {
  let allBlogResultss = data.filter(
    (e) => e.blog_category === "Beginners Guide"
  );
  console.log(allBlogResultss);
  divrow.innerHTML = "";
  allBlogResultss.forEach((e) => {
    console.log(e);
    let displayDiv = document.createElement("div");
    displayDiv.classList.add(
      "col-lg-4",
      "col-md-6",
      "col-sm-12",
      "text-center",
      "my-4"
    );
  
    displayDiv.innerHTML = `<div>
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${e.feature_image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">${e.title}</h6>
    </div>`
  ;

    divrow.appendChild(displayDiv);
  });
}

//display clicked-category
function displayCategory(elementBlog) {
  console.log(elementBlog);

  let allBlogResults = data.filter((e) => e.blog_category === elementBlog);
  console.log(allBlogResults);
  divrow.innerHTML = "";
  allBlogResults.forEach((e) => {
    console.log(e);

    let displayDiv = document.createElement("div");
    displayDiv.classList.add(
      "col-lg-4",
      "col-md-6",
      "col-sm-12",
      "text-center",
      "my-4"
    );
    displayDiv.innerHTML = `<div>
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${e.feature_image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">${e.title}</h6>
    </div>`
  ;

    divrow.appendChild(displayDiv);
  });
}
//display all categories

 let displayAllCategories = (data)=>{
  const uniqueValues = data.filter((value, index, self) => self.indexOf(value) === index);
  console.log(uniqueValues)
  divrow.innerHTML = ""
  uniqueValues.forEach((element) => {
  let displayDiv = document.createElement("div");
  displayDiv.classList.add(
    "col-lg-4",
    "col-md-6",
    "col-sm-12",
    "text-center",
    "my-4"
  );
  displayDiv.innerHTML = `<div>
  <div class="card mx-auto" style="width: 18rem;">
  <img src="${element.feature_image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${element.title}</h6>
  </div>`
;
divrow.appendChild(displayDiv);

})
}
