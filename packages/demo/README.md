const { products, loading, error } = useProducts([ { name: FILTER_NAME, value: FILTER_VALUE } ])

const { product, loading, error } = useProduct(id);

const { productVariant } = useProductVariant(product, { size: 'XL', color: ‘green’ });

const { loading, error, update(quantity), add(quantity), remove(quantity) } = useCheckoutLineItemsModification(product_variant)
const { loading, error, update(new_line_items), removeAll } = useCheckoutLineItemsModification() //

jabłka = 5,
add(1) = 6, update(1) = 1, remove(1) = 4

/// STARA ROZKMINA

Jeśli chodzi o addToCart
To nie jest to "globalny adder", ale zawsze trzeba go wyciągnąć dla konkretnego product variantu. Dlatego, że można wyobrazic sobie latwo sytuacje dodawania kilku produkt-variantów na raz
I wtedy chcemy mieć odrębny loading, error dla każdego dodawania

Stąd ta kosntrukcja
const { addToCart(amount) } = useAddToCart(productVariant).

wtedy jesli masz 10 produkt cardów i każdy ma "add to cart", to każdy może miec tego hook'a i odrebny loader etc etc
Rozmina: kilka klikniec na raz -> to do Ciebie. Mnie interesuje czy wywolywać "addToCart(10)" i to DODAJE NOWE 10,
czy tak jakby zawsze mamy updateCart(bezwzględna_ilość)
problemy tu są takie jak kilka klikniec na raz, asynchronicznosc wywolan do backendu etc etc
