(function () {
  const CART_KEY = "ilta_print_cart_v1";
  const WHATSAPP_NUMBER = "6285183369972";

  function rupiah(value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(Number(value || 0));
  }

  function readCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function writeCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartCount();
    updateAddButtons();
  }

  function itemKey(item) {
    return `${item.id}::${item.variant}`;
  }

  function getButtonItem(button) {
    const form = button.closest("[data-product-purchase]");
    const variantSelect = form ? form.querySelector("[data-product-variant]") : null;
    const qtyInput = form ? form.querySelector("[data-product-qty]") : null;
    const selected = variantSelect ? variantSelect.options[variantSelect.selectedIndex] : null;

    return {
      id: button.dataset.productId,
      title: button.dataset.productTitle,
      url: button.dataset.productUrl,
      image: button.dataset.productImage,
      unit: button.dataset.productUnit,
      variant: selected ? selected.value : button.dataset.productVariant,
      price: selected ? selected.dataset.price : button.dataset.productPrice,
      qty: qtyInput ? qtyInput.value : button.dataset.productQty
    };
  }

  function buttonDefaultLabel(button) {
    return button.dataset.defaultLabel || button.textContent.trim() || "Tambah";
  }

  function updateAddButtons() {
    const items = readCart();
    document.querySelectorAll("[data-add-cart]").forEach((button) => {
      const buttonItem = getButtonItem(button);
      const isAdded = items.some((entry) => itemKey(entry) === itemKey(buttonItem));
      button.dataset.defaultLabel = buttonDefaultLabel(button);
      button.classList.toggle("bg-green-600", isAdded);
      button.classList.toggle("hover:bg-green-700", isAdded);
      button.classList.toggle("text-white", isAdded);
      button.classList.toggle("bg-oren", !isAdded && button.dataset.defaultLabel === "Tambah");
      button.classList.toggle("bg-ilta", !isAdded && button.dataset.defaultLabel !== "Tambah");
      button.setAttribute("aria-pressed", isAdded ? "true" : "false");
      button.innerHTML = isAdded
        ? '<span class="inline-flex items-center justify-center gap-2"><svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><span>Ditambahkan</span></span>'
        : button.dataset.defaultLabel;
    });
  }

  function updateCartCount() {
    const count = readCart().reduce((total, item) => total + Number(item.qty || 0), 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = count;
      node.classList.toggle("hidden", count === 0);
    });
  }

  function showNotice(message) {
    let notice = document.querySelector("[data-cart-notice]");
    if (!notice) {
      notice = document.createElement("div");
      notice.setAttribute("data-cart-notice", "");
      notice.className = "fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ilta px-5 py-3 text-sm font-black text-white shadow-deep";
      document.body.appendChild(notice);
    }
    notice.textContent = message;
    notice.style.opacity = "1";
    clearTimeout(window.__iltaCartNotice);
    window.__iltaCartNotice = setTimeout(() => {
      notice.style.opacity = "0";
    }, 1800);
  }

  function addItem(rawItem) {
    const item = {
      id: rawItem.id,
      title: rawItem.title,
      url: rawItem.url,
      image: rawItem.image,
      unit: rawItem.unit || "item",
      variant: rawItem.variant || "Default",
      price: Number(rawItem.price || 0),
      qty: Math.max(1, Number(rawItem.qty || 1))
    };
    const items = readCart();
    const existing = items.find((entry) => itemKey(entry) === itemKey(item));
    if (existing) {
      existing.qty += item.qty;
    } else {
      items.push(item);
    }
    writeCart(items);
    showNotice(`${item.title} ditambahkan ke cart`);
  }

  function bindAddButtons() {
    document.querySelectorAll("[data-add-cart]").forEach((button) => {
      if (button.dataset.cartBound === "true") return;
      button.dataset.cartBound = "true";
      button.dataset.defaultLabel = buttonDefaultLabel(button);
      button.addEventListener("click", () => {
        addItem(getButtonItem(button));
      });
    });
    document.querySelectorAll("[data-product-variant]").forEach((select) => {
      if (select.dataset.cartVariantBound === "true") return;
      select.dataset.cartVariantBound = "true";
      select.addEventListener("change", updateAddButtons);
    });
    updateAddButtons();
  }

  function renderCart() {
    const container = document.querySelector("[data-cart-items]");
    if (!container) return;

    const emptyState = document.querySelector("[data-cart-empty]");
    const summary = document.querySelector("[data-cart-summary]");
    const totalNode = document.querySelector("[data-cart-total]");
    const checkout = document.querySelector("[data-cart-checkout]");
    const items = readCart();
    const total = items.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
    totalNode && (totalNode.textContent = rupiah(total));

    container.innerHTML = "";
    if (!items.length) {
      emptyState && emptyState.classList.remove("hidden");
      summary && summary.classList.add("hidden");
      return;
    }

    emptyState && emptyState.classList.add("hidden");
    summary && summary.classList.remove("hidden");

    items.forEach((item, index) => {
      const subtotal = Number(item.price) * Number(item.qty);
      const row = document.createElement("article");
      row.className = "grid gap-4 rounded-[28px] border bg-white p-4 shadow-soft md:grid-cols-[96px_1fr_auto] md:items-center";
      row.innerHTML = `
        <a href="${item.url}" class="block h-24 overflow-hidden rounded-2xl bg-soft">
          <img src="${item.image}" alt="${item.title}" class="h-full w-full object-cover">
        </a>
        <div>
          <h2 class="text-xl font-black text-ilta"><a href="${item.url}">${item.title}</a></h2>
          <p class="mt-1 text-sm text-gray-500">${item.variant} · ${rupiah(item.price)} / ${item.unit}</p>
          <p class="mt-2 text-sm font-bold text-gray-700">Subtotal: ${rupiah(subtotal)}</p>
        </div>
        <div class="flex items-center gap-2 md:justify-end">
          <button class="h-10 w-10 rounded-full bg-soft font-black text-ilta" data-cart-dec="${index}" aria-label="Kurangi ${item.title}">-</button>
          <input class="h-10 w-16 rounded-full border text-center font-black" data-cart-qty="${index}" min="1" type="number" value="${item.qty}">
          <button class="h-10 w-10 rounded-full bg-ilta font-black text-white" data-cart-inc="${index}" aria-label="Tambah ${item.title}">+</button>
          <button class="rounded-full border px-4 py-2 text-sm font-black text-red-600" data-cart-remove="${index}">Hapus</button>
        </div>
      `;
      container.appendChild(row);
    });

    if (checkout) {
      const lines = items.map((item, index) => {
        const subtotal = Number(item.price) * Number(item.qty);
        return `${index + 1}. ${item.title} - ${item.variant}\nQty: ${item.qty} ${item.unit}\nHarga: ${rupiah(item.price)}\nSubtotal: ${rupiah(subtotal)}`;
      });
      const message = `Halo ILTA PRINT, saya ingin konsultasi order:\n\n${lines.join("\n\n")}\n\nTotal Estimasi: ${rupiah(total)}`;
      checkout.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    }

    bindCartActions();
  }

  function bindCartActions() {
    const items = readCart();
    document.querySelectorAll("[data-cart-inc]").forEach((button) => {
      button.addEventListener("click", () => {
        items[Number(button.dataset.cartInc)].qty += 1;
        writeCart(items);
        renderCart();
        updateAddButtons();
      });
    });
    document.querySelectorAll("[data-cart-dec]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = items[Number(button.dataset.cartDec)];
        item.qty = Math.max(1, Number(item.qty) - 1);
        writeCart(items);
        renderCart();
        updateAddButtons();
      });
    });
    document.querySelectorAll("[data-cart-qty]").forEach((input) => {
      input.addEventListener("change", () => {
        items[Number(input.dataset.cartQty)].qty = Math.max(1, Number(input.value || 1));
        writeCart(items);
        renderCart();
        updateAddButtons();
      });
    });
    document.querySelectorAll("[data-cart-remove]").forEach((button) => {
      button.addEventListener("click", () => {
        items.splice(Number(button.dataset.cartRemove), 1);
        writeCart(items);
        renderCart();
        updateAddButtons();
      });
    });
    document.querySelectorAll("[data-cart-clear]").forEach((button) => {
      button.addEventListener("click", () => {
        writeCart([]);
        renderCart();
        updateAddButtons();
      });
    });
  }

  window.ILTA_CART = { readCart, writeCart, addItem, rupiah, updateAddButtons };

  document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    bindAddButtons();
    renderCart();
    updateAddButtons();
  });
})();
