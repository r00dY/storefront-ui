const { products, loading, error } = useProducts(… params …)

const { product, loading, error } = useProduct(id);

const { productVariant } = useProductVariant(product, { ‘size’: size, color: ‘green’ });

Jeśli chodzi o addToCart
To nie jest to "globalny adder", ale zawsze trzeba go wyciągnąć dla konkretnego product variantu. Dlatego, że można wyobrazic sobie latwo sytuacje dodawania kilku produkt-variantów na raz
I wtedy chcemy mieć odrębny loading, error dla każdego dodawania

Stąd ta kosntrukcja
const { addToCart(amount) } = useAddToCart(productVariant).

wtedy jesli masz 10 produkt cardów i każdy ma "add to cart", to każdy może miec tego hook'a i odrebny loader etc etc
Rozmina: kilka klikniec na raz -> to do Ciebie. Mnie interesuje czy wywolywać "addToCart(10)" i to DODAJE NOWE 10,
czy tak jakby zawsze mamy updateCart(bezwzględna_ilość)
problemy tu są takie jak kilka klikniec na raz, asynchronicznosc wywolan do backendu etc etc
