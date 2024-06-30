document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            primaryImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Outside Vibes T-Shirt Sunshine",
            badge: "BEST SELLER",
            rating: 4,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Hike Bottle Outside Vibes Forest Green",
            badge: "BEST SELLER",
            savebadge: "SAVE 15%",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Rest in Nature T-Shirt Charcoal",
            badge: "BEST SELLER",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1605666807892-8c11d020bede?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Outside Vibes Cap Forest Green",
            badge: "BEST SELLER",
            savebadge: "SAVE 15%",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1572635196184-84e35138cf62?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1609708536965-6e5b915b195b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Rest in Nature T-Shirt Charcoal",
            badge: "BEST SELLER",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Hike Bottle Outside Vibes",
            badge: "BEST SELLER",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1590005354167-6da97870c757?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Outside Vibes T-Shirt Sunshine",
            badge: "BEST SELLER",
            savebadge: "SAVE 15%",
            rating: 4,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Hike Bottle Outside Vibes Forest Green",
            badge: "BEST SELLER",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Rest in Nature T-Shirt Charcoal",
            badge: "BEST SELLER",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
        {
            primaryImage: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            secondaryImage: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Outside Vibes Cap Forest Green",
            badge: "BEST SELLER",
            savebadge: "SAVE 15%",
            rating: 5,
            reviews: 1234,
            price: 104.95,
        },
    ];

    const grid = document.querySelector(".grid");
    const showMoreButton = document.getElementById("show-more");

    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.className = `product-card rounded-lg sm:w-80 overflow-hidden ${index >= 4 ? "hidden sm:block" : ""
            }`;
        productCard.innerHTML = `
        <div class="relative">
          <img src="${product.primaryImage}" alt="${product.name}" class="rounded-lg shadow-sm w-full h-44 sm:h-80 object-cover primary-image">
          <img src="${product.secondaryImage}" alt="${product.name}" class="rounded-lg shadow-sm w-full h-44 sm:h-80 object-cover secondary-image absolute top-0 left-0 opacity-0 transition-opacity duration-300">
          <div class="absolute border-2 border-black top-2 left-2 bg-white text-black font-bebas font-normal text-xs px-2 py-1 rounded-full uppercase">${product.badge}</div>
          ${product.savebadge ? `<div class="absolute border-2 border-black top-2 right-2 bg-brandgreen text-white font-bebas font-normal text-xs px-2 py-1 rounded-full uppercase">${product.savebadge}</div>` : ''}
        </div>
        <div class="p-2 sm:p-4">
          <h2 class="text-lg font-normal uppercase font-bebas text-brandtext">${product.name}</h2>
          <div class="flex items-center my-2">
            <div class="flex items-center">
              ${generateStars(product.rating)}
            </div>
            <span class="font-poppins font-normal text-xs text-brandgray text-gray-600 ml-2">${product.reviews} Reviews</span>
          </div>
          <div class="font-medium text-branddarkgray text-base">$${product.price}</div>
        </div>
      `;
        grid.appendChild(productCard);

        // Image swap on hover
        const primaryImage = productCard.querySelector(".primary-image");
        const secondaryImage = productCard.querySelector(".secondary-image");
        productCard.addEventListener("mouseenter", () => {
            primaryImage.classList.add("opacity-0");
            secondaryImage.classList.remove("opacity-0");
        });
        productCard.addEventListener("mouseleave", () => {
            primaryImage.classList.remove("opacity-0");
            secondaryImage.classList.add("opacity-0");
        });
    });

    showMoreButton.addEventListener("click", () => {
        document.querySelectorAll(".product-card.hidden").forEach(card => {
            card.classList.remove("hidden");
        });
        showMoreButton.classList.add("hidden");
    });

    function generateStars(rating) {
        const fullStar = '<svg class="w-4 h-4 fill-current text-[#231F20]" viewBox="0 0 32 32"><path d="M12 .587l3.668 10.821h11.261l-9.118 6.612 3.668 10.821-9.118-6.612-9.118 6.612 3.668-10.821-9.118-6.612h11.261z"/></svg>';
        const emptyStar = '<svg class="w-4 h-4 fill-current text-gray-400" viewBox="0 0 32 32"><path d="M12 .587l3.668 10.821h11.261l-9.118 6.612 3.668 10.821-9.118-6.612-9.118 6.612 3.668-10.821-9.118-6.612h11.261z"/></svg>';
        return fullStar.repeat(Math.floor(rating)) + emptyStar.repeat(5 - Math.floor(rating));
    }
});
