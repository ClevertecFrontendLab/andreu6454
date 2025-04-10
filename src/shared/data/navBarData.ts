import ChildrensIcon from '~/assets/svg/childrens.svg';
import DessertsIcon from '~/assets/svg/desserts.svg';
import DrinksIcon from '~/assets/svg/drinks.svg';
import FirstCoursesIcon from '~/assets/svg/firstCourses.svg';
import GrilledIcon from '~/assets/svg/grilled.svg';
import NationalIcon from '~/assets/svg/national.svg';
import PreparationsIcon from '~/assets/svg/preparations.svg';
import SaladsIcon from '~/assets/svg/salads.svg';
import SaucesIcon from '~/assets/svg/sauces.svg';
import SecondCoursesIcon from '~/assets/svg/secondCourses.svg';
import SnacksIcon from '~/assets/svg/snacks.svg';
import TherapeuticNutritionIcon from '~/assets/svg/therapeuticNutrition.svg';
import VeganCuisineIcon from '~/assets/svg/veganCuisine.svg';

export const NavBarData = [
    {
        icon: SaladsIcon,
        title: 'Салаты',
        general: 'salads',
        links: [
            { title: 'Мясные салаты', link: 'meat-salads' },
            { title: 'Рыбные салаты', link: 'fish-salads' },
            { title: 'Овощные салаты', link: 'vegetable-salads' },
            { title: 'Теплые салаты', link: 'warm-salads' },
        ],
    },
    {
        icon: SnacksIcon,
        title: 'Закуски',
        general: 'snacks',
        links: [
            { title: 'Мясные закуски', link: 'meat-snacks' },
            { title: 'Рыбные закуски', link: 'fish-snacks' },
            { title: 'Овощные закуски', link: 'vegetable-snacks' },
            { title: 'Теплые закуски', link: 'warm-snacks' },
            { title: 'Бутерброды', link: 'sandwiches' },
            { title: 'Фастфуд', link: 'fastfood' },
        ],
    },
    {
        icon: FirstCoursesIcon,
        title: 'Первые блюда',
        general: 'first-courses',
        links: [
            { title: 'Мясные супы', link: 'meat-soups' },
            { title: 'Овощные супы', link: 'vegetable-soups' },
            { title: 'Бульоны', link: 'broths' },
            { title: 'Холодные супы', link: 'cold-soups' },
            { title: 'Диетические супы', link: 'diet-soups' },
        ],
    },
    {
        icon: SecondCoursesIcon,
        title: 'Вторые блюда',
        general: 'second-courses',
        links: [
            { title: 'Мясные', link: 'meat' },
            { title: 'Рыбные', link: 'fish' },
            { title: 'Овощные', link: 'vegetable' },
            { title: 'Из птицы', link: 'poultry' },
            { title: 'Из грибов', link: 'mushrooms' },
            { title: 'Из субпродуктов', link: 'Offal' },
            { title: 'На пару', link: 'couple' },
            { title: 'Пельмени, вареники', link: 'pelmeni' },
            { title: 'Мучные гарниры', link: 'flour-side-dishes' },
            { title: 'Овощные гарниры', link: 'vegetable-side-dishes' },
            { title: 'Пицца', link: 'pizza' },
            { title: 'Суши', link: 'sushi' },
        ],
    },
    {
        icon: DessertsIcon,
        title: 'Десерты, выпечка',
        general: 'desserts',
        links: [
            { title: 'Блины и оладьи', link: 'pancakes' },
            { title: 'Пироги и пончики', link: 'pies' },
            { title: 'Торты', link: 'cakes' },
            { title: 'Рулеты', link: 'rolls' },
            { title: 'Кексы и маффины', link: 'cupcakes' },
            { title: 'Сырники и ватрушки', link: 'syrniki' },
            { title: 'Из слоеного теста', link: 'puff-dough' },
            { title: 'Из заварного теста', link: 'choux-dough' },
            { title: 'Из заварного теста', link: 'yeast-dough' },
            { title: 'Булочки и сдоба', link: 'buns' },
            { title: 'Хлеб', link: 'bread' },
            { title: 'Тесто на пиццу', link: 'pizza-dough' },
            { title: 'Кремы', link: 'creams' },
        ],
    },
    {
        icon: GrilledIcon,
        title: 'Блюда на гриле',
        general: 'grilled',
        links: [
            { title: 'Говядина', link: 'beef' },
            { title: 'Свинина', link: 'pork' },
            { title: 'Птица', link: 'poultry' },
            { title: 'Рыба', link: 'fish' },
            { title: 'Грибы', link: 'mushrooms' },
            { title: 'Овощи', link: 'vegetables' },
        ],
    },
    {
        icon: VeganCuisineIcon,
        title: 'Веганская кухня',
        general: 'vegan',
        links: [
            { title: 'Закуски', link: 'snacks' },
            { title: 'Первые блюда', link: 'first-courses' },
            { title: 'Вторые блюда', link: 'second-courses' },
            { title: 'Гарниры', link: 'side-dishes' },
            { title: 'Десерты', link: 'desserts' },
            { title: 'Выпечка', link: 'bakery' },
            { title: 'Сыроедческие блюда', link: 'raw-food-dishes' },
            { title: 'Напитки', link: 'drinks' },
        ],
    },
    {
        icon: ChildrensIcon,
        title: 'Детские блюда',
        general: 'child',
        links: [
            { title: 'Первые блюда', link: 'first-courses' },
            { title: 'Вторые блюда', link: 'second-courses' },
            { title: 'Гарниры', link: 'side-dishes' },
            { title: 'Выпечка', link: 'bakery' },
            { title: 'Без глютена', link: 'gluten-free' },
            { title: 'Без сахара', link: 'sugar-free' },
            { title: 'Без аллергенов', link: 'allergen-free' },
            { title: 'Блюда для прикорма', link: 'complementary' },
        ],
    },
    {
        icon: TherapeuticNutritionIcon,
        title: 'Лечебное питание',
        general: 'healthy',
        links: [
            { title: 'Детская диета', link: 'childerns-diet' },
            { title: 'Диета №1', link: 'diet1' },
            { title: 'Диета №2', link: 'diet2' },
            { title: 'Диета №3', link: 'diet3' },
            { title: 'Диета №4', link: 'diet4' },
            { title: 'Диета №5', link: 'diet5' },
            { title: 'Диета №6', link: 'diet6' },
            { title: 'Диета №7', link: 'diet7' },
            { title: 'Диета №8', link: 'diet8' },
            { title: 'Диета №9', link: 'diet9' },
            { title: 'Диета №10', link: 'diet10' },
            { title: 'Диета №11', link: 'diet11' },
            { title: 'Диета №12', link: 'diet12' },
            { title: 'Диета №13', link: 'diet13' },
            { title: 'Диета №14', link: 'diet14' },
            { title: 'Без глютена', link: 'gluten-free' },
            { title: 'Без аллергенов', link: 'allergen-free' },
        ],
    },
    {
        icon: NationalIcon,
        title: 'Национальные',
        general: 'national',
        links: [
            { title: 'Американская кухня', link: 'american-cuisine' },
            { title: 'Армянская кухня', link: 'armenian-courses' },
            { title: 'Греческая кухня', link: 'greek-courses' },
            { title: 'Грузинская кухня', link: 'georgian-courses' },
            { title: 'Итальянская кухня', link: 'italian-courses' },
            { title: 'Испанская кухня', link: 'spanish-courses' },
            { title: 'Китайская кухня', link: 'chinese-courses' },
            { title: 'Мексиканская кухня', link: 'mexican-courses' },
            { title: 'Паназиатская кухня', link: 'pan-asian-courses' },
            { title: 'Русская кухня', link: 'russian-courses' },
            { title: 'Турецкая кухня', link: 'turkish-courses' },
            { title: 'Французская кухня', link: 'french-courses' },
            { title: 'Шведская кухня', link: 'swedish-courses' },
            { title: 'Японская кухня', link: 'japanese-courses' },
            { title: 'Другая кухня', link: 'other-courses' },
        ],
    },
    {
        icon: SaucesIcon,
        title: 'Соусы',
        general: 'sauces',
        links: [
            { title: 'Соусы мясные', link: 'meat-sauces' },
            { title: 'Соусы сырные', link: 'cheese-sauces' },
            { title: 'Маринады', link: 'marinades' },
        ],
    },
    {
        icon: DrinksIcon,
        title: 'Напитки',
        general: 'drinks',
        links: [
            { title: 'Соки', link: 'juices' },
            { title: 'фреши', link: 'fresh-juices' },
            { title: 'Смузи', link: 'smoothie' },
            { title: 'Компоты', link: 'compotes' },
            { title: 'Кисели', link: 'kissels' },
            { title: 'Кофе', link: 'coffee' },
            { title: 'Лечебный', link: 'healing' },
            { title: 'чай', link: 'tea' },
            { title: 'Квас', link: 'kvass' },
            { title: 'Коктейли', link: 'cocktails' },
            { title: 'Алкогольные', link: 'alcoholic' },
        ],
    },
    {
        icon: PreparationsIcon,
        title: 'Заготовки',
        general: 'preparations',
        links: [
            { title: 'Мясные заготовки', link: 'meat-preparations' },
            { title: 'Рыбные заготовки', link: 'fish-preparations' },
            { title: 'Из огурцов', link: 'cucumbers-preparations' },
            { title: 'Из томатов', link: 'tomatoes-preparations' },
            { title: 'Из грибов', link: 'mushrooms-preparations' },
            { title: 'Овощные заготовки', link: 'vegetable-preparations' },
            { title: 'Салаты, икра', link: 'salads' },
            { title: 'Из фруктов и ягод', link: 'fruit-preparations' },
        ],
    },
];
