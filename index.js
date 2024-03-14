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
    let ab = element.blog_category;
    console.log(ab);
    array.push(ab);

    // console.log(element.blog_category)
  });
  let arraysort = array.sort();
  const finalArray = arraysort.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  console.log(finalArray);
  finalArray.forEach((element) => {
    let blogCategoryName = document.createElement("div");
    // blogCategoryName.addEventListener("click",()=> displayCategory(element));
    // blogCategoryName.innerHTML = element;
    blogCategoryName.classList.add("col-4");
    blogCategoryName.innerHTML = ` <button type="button" class="btn btn-primary" onclick="displayCategory('${element}')">${element}</button>
  `;
    row.appendChild(blogCategoryName);
  });
};
//default
// let defaultData = data.filter((e) => e.blog_category === "Beginners Guide")
// if (defaultData) {
//   divrow.innerHTML = ""
//   displayCategory("Beginners Guide")

// }
// let allBlogResultss = data.filter((e) => e.blog_category === "Beginners Guide");
// console.log(allBlogResultss)

function displayDefaultCategory(data) {
  // console.log(elementBlog)

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
      "col-md-4",
      "col-sm-12",
      "text-center",
      "my-4"
    );
    displayDiv.innerHTML = `<div>
      <img src="${e.feature_image}" alt=""  style="max-width: 100%;">
      <p></p>
      <h6>${e.title}</h6>
    </div>`;

    divrow.appendChild(displayDiv);
  });
}

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
      "col-md-4",
      "col-sm-12",
      "text-center",
      "my-4"
    );
    displayDiv.innerHTML = `<div>
        <img src="${e.feature_image}" alt=""  style="max-width: 100%;">
        <p></p>
        <h6>${e.title}</h6>
      </div>`;

    divrow.appendChild(displayDiv);
  });
}
