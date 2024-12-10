$(document).ready(function () {
    const apiUrl = "https://dummyjson.com/products";
    $.getJSON(apiUrl, function (data) {
      const productsArray = data.products; // Access the 'products' array
      const productsHtml = productsArray.map(product => `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}" class="img">
          <span class="title">${product.title}</span>
          <span class="price">$${product.price}</span>
          <div class="product-actions">
            <button class="add-to-cart">Add To Cart</button>
            <button class="buy-now">Buy Now</button>
          </div>
        </div>
      `).join("");
      $("#products").html(productsHtml); // Inject HTML into the container
    });
  });
  $(document).on("mouseover",".card",function(){
    $(".buy-now ,.add-to-cart").show();
  })
  $(document).on("mouseout",".card",function(){
    $(".buy-now,.add-to-cart").hide();
  })
// Slider
$(document).ready(function () {
    const $slides = $(".slide-test"); // Select all slides
    const $pointers = $(".pointer-span"); // Select pointers
    let currentIndex = 0; // Start with the first slide
    const slideCount = $slides.length; // Total number of slides
    function switchSlide() {
    $slides.removeClass("active").addClass("d-none");
    $pointers.removeClass("active-pointer-span");
    currentIndex = (currentIndex + 1) % slideCount;
    $slides.eq(currentIndex).addClass("active").removeClass("d-none");
    $pointers.eq(currentIndex).addClass("active-pointer-span");
    }
    setInterval(switchSlide, 1000);
});
