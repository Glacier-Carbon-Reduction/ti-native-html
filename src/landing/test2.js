var imagesDiv = document.getElementsByClassName("ember-view learning-path-detail-milestone-item__asset")
var images = []
for (let index = 0; index < imagesDiv.length; index++) {
  images.push(imagesDiv[index].src)
}
var titleDiv = document.getElementsByClassName("learning-path-detail-milestone-item__title")
var titles = []
for (let index = 0; index < titleDiv.length; index++) {
  titles.push(titleDiv[index].innerText)
}
var detailsDiv = document.getElementsByClassName("ember-view editor-content indent-list")
var details = []
for (let index = 0; index < detailsDiv.length; index++) {
  details.push(detailsDiv[index].innerText)
}
// var parentDiv = document.getElementsByClassName("course__detail__sidebar")
// parentDiv[0].innerHTML = ''
var parentDiv = document.getElementsByClassName("course__detail__container")
parentDiv[0].innerHTML = ''
var newElement = document.createElement("div");
newElement.innerHTML = `<section class="bg-glacier-darkgreen-600 bg-glacier-greengoo py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pt-16">
                <div>
                    <p class="text-base font-semibold tracking-wider text-white uppercase tracking-widest mt-4">
                        LEARNING PATH
                    </p>
                    <h1 class="mt-4 font-bold text-white lg:mt-8 text-6xl md:text-5xl">
                        CO2-Fußabdruck
                    </h1>
                </div>  
        </div>
    </section>`
parentDiv[0].appendChild(newElement)

for (let index = 0; index < images.length; index++) {
  if (index % 2 === 0) {
    var newElement = document.createElement("div");
    newElement.innerHTML = `<section class="py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p class="text-1xl font-semibold capitalize tracking-widest green-text" style="color:rgb(109 212 173);">
              MODULE  
              <span class="custom-span" style="border: 1px solid #143560;
  color: #143560;
   border-radius: 12px;
    padding: 5px 10px; 
  font-size: 12px;
  margin-left: 20px;">REQUIRED</span>
            </p>
            <h1 class="mt-2 mb-5 text-4xl font-semibold">
              ${titles[index]}
            </h1>
            <p class="mt-4 text-base">
             ${details[index]} 
            </p>
            <a
              href="/courses/corporate-carbon-footprint"
              title=""
              class="inline-flex items-center px-6 py-4 mt-8 font-normal text-wl transition-all duration-200 bg-glacier-darkgreen-400 rounded-full lg:mt-16"
              role="button"
            >
              Start Module
            </a>
            <div class="relative w-60 h-2 bg-gray-300 rounded-full ml-auto mb-20 mr-20 ">
  <div class="absolute top-0 left-0 h-2 bg-green-500 rounded-full" style="width: 50%"></div>
  <span class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6 text-sm text-gray-500">50%</span>
</div>
          </div>
          
          <div>
            <img
              class="w-full"
              src=${images[index]}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>`
    parentDiv[0].appendChild(newElement)
  } else {
    var newElement = document.createElement("div");
    newElement.innerHTML = `<section class="py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
             <div>
            <img
              class="w-full"
              src="${images[index]}"
              alt=""
            />
          </div>
          <div>
            <p class="text-1xl font-semibold capitalize tracking-widest" style="color:rgb(109 212 173);">
              MODULE  
              <span class="custom-span" style="border: 1px solid #143560;
  color: #143560;
   border-radius: 12px;
    padding: 5px 10px; 
  font-size: 12px;
  margin-left: 20px;">REQUIRED</span>
            </p>
            
            <h1 class="mt-2 mb-5 text-4xl font-semibold">
               ${titles[index]}
            </h1>
            <p class="mt-4 text-base">
              ${details[index]}  
            </p>
            <a
              href="/courses/personal-co-footprint"
              title=""
              class="inline-flex items-center px-6 py-4 mt-8 font-normal text-wl transition-all duration-200 bg-glacier-darkgreen-400 rounded-full lg:mt-16"
              role="button"
            >
              Start Module
            </a>
            <p class="text-1xl font-semibold capitalize tracking-widest">Complete Module 1</p>
            <div class="relative w-60 h-2 bg-gray-300 rounded-full ml-auto mb-20 mr-20 ">
  <div class="absolute top-0 left-0 h-2 bg-green-500 rounded-full" style="width: 50%"></div>
  <span class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6 text-sm text-gray-500">50%</span>
</div>         
          </div>
        </div>
      </div>
    </section>`
    parentDiv[0].appendChild(newElement)
  }

}