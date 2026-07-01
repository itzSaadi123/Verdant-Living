/* ============================================================
   VERDANT — App Logic (app.js)
   ============================================================ */

// ── Plant Images (for products) ─────────────────────────────
const plantImages = {
  1:  'https://i.pinimg.com/736x/07/e7/c7/07e7c70297742e7aefeeb5d900af5e39.jpg',
  2:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK89qFksbveQGB9tJtN1wDCtfMecZP4qyx4ptI3PXIDF13bXxPuJdhdBc&s=10',
  3:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXQxkrUSGLKy4tVx5c72NtUaWeWZlLOSFS_CQmPqcokefTyM15hFgiILS&s=10',
  4:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvt_V11WmxGen-DUgYhHmvimZ_lG8iwWgog-i7AALmIU-G1kFN9aGM-8&s=10',
  5:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4R6bhzEMeudiDc0kpTeQ9kbIG316QD5RoUTREfr28Q&s=10',
  6:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Rp4_A_yfuFkCyEJr0j-eQKUJpIsRrPn3aMUHkhCX8Jmm5QmO4_0BhVI&s=10',
  7:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCXkl4RHVq_-Bx-8pwaLDzqC_d1KaaQjQMjCgp4wH_g&s=10',
  8:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPKecQ0hT52TDoAnvT6qpxizBGI_si3egXPqAH85UYVnXDlch5xqI3icK&s=10',
  9:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08oRNOwJZIyl4o0_fBE5bIn6z7co3YWj8kV9Y8pm7yA&s=10',
  10: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37RUmMxRnV6V1vxBO-OeAvAx8sGntaMFnMalaU_jGdQ&s=10',
  11: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3XsKTHK7eFJgBCAByU-kdCzzijfcNX_l3HkYP2uuVr6iagA7uamlH6M&s=10',
  12: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kvAk5xSLqKy4ltUVY_4hyMYoHcQ-F9Y9dkhbOp9Giw-KjukPN0ppY_U&s=10',
  13: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlacGXJ1xJ-f-2z4cLcRDgRpBaPtu2M96xlN7vpcMnw&s=10s',
  14: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSltFOUbUZkNr08snM7FCfJK0WICE4jmsPPUJCC0QsBw&s=10',
  15: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKWmW2obOdda2QUwYdccjimoqGmKFrnp3VfR595YLrQ&s=10',
  16: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlf8okSsuiLT6Bon8ew1UsWCdNIbj6a90kHlSCgWMhA&s=10',
  17: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05n1wPgguLx6mUCBX555dIyMI2jClzVkIiQbGzsEaqQ&s=10',
  18: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzFy-G5Jk3KGygzhw7SHWGDxJ-Ir8289wBFcETFcr8A&s=10',
  19: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSMvXkNC2t2Qj32dWIej_5cJyApVIGFjtZvnl6Orr7A&s=10',
  20: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAwbexvwO3D3ccbn0N_99P3SrHtAIByQFmaefjV7dcA&s=10',
  21: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyGCeU8Dd3cMFGZKX57FuIoG7SnwGtHltZsGpPz9Ipw&s=10',
  22: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7umylnR2jq8veKkEMkkVMs_br6w48NgHjyOl_zb6fpA&s=10',
  23: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdbTd5MO3NuT3XzLBKs5yu4eWdbMCIei5jkEImuQmzQ&s=10',
  24: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbtFYU1gncnH29vHAYiho7JMyjTnYRcgWUE2_6KuyGA&s=10',
  25: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7zRAcd_1vN9mgUywPmJdI2bP9o3XI4FVSr0srPV-eQ&s=10',
  26: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIZCcvt8uVX7i4SqdmTU0a6ZOiLQZVWd5beoTBNxJkQ&s=10',
  27: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbghaKJVMHotJq_f0R4kIeDvEUlGnQnJ_JOoFuTvKrDw&s=10',
  28: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIgK33tFDWFzIQMo_ib-W_EsDpjmCfklKeMlTvvxVog&s=10',
  29: 'https://aroidwiki.com/wp-content/uploads/2021/11/golden-pothos-care-image1-768x1024.jpg',
  30: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSnqno1k_67Kd3Ph0vczif9UhSFgG9ZTBB1p0aUzq6Q&s=10',
  31: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXVmcaIHaxWoDeV19Ybq0_57s8I5kayoqv_voOa1dcA&s=10',
  32: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsrV1AwRXBnBH5M1MGPJ83raPGMBj8ZRD50kpLggYpLcS_hLu7stEy4M&s=10',
  33: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHmp7ab9QoMNWbLDpvVDbW2QMyFzynlhB7kcWWRCnFw&s=10',
  34: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDm_Evy0hoWKQq1_Tmu1QQonoSfecj3S4h0jXVUICZzg&s=10',
  35: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP4UNDWsNyUhXDWicXhsti8hNO-LfLckqgDh6e8qsOJQ&s=10',
  36: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRhQ-xGEyTcwrPy_jaZpnQ04WyBQYusY0psHdEM-r_g&s',
  37: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypEp70cthQNdeU8oHboqD52TSQiML5lmMd10AwQFkDw&s=10',
  38: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfsZMDr7dg6WO9Q2twuoPoZbqr2ks9t-8layCl1yxgg&s=10',
  39: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW38zUNHjomfpMNsLfksOsOpXPAqIYVLUYMCYD5AgbrA&s=10',
  40: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BOJo8ZvGVg7BFoA-V-uWTIgjWyx1yYklIzJqd5LFcQ&s=10',
  41: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDoQTHK0xqL7EOpUINfCdoSHLwANcMMv-ItOu_Y9e7g&s=10',
  42: 'https://m.media-amazon.com/images/I/6124b1iP9uL._AC_UF1000,1000_QL80_.jpg',
  43: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYU8ZwxmlsOgAMm6TnlxgAJZNnaheUCvYxGGbscPosg&s=10',
  44: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14EWOQ4a8LU2dKqt18hYVCYXOis7FUfD1iUmWLHyzUQ&s=10',
  45: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7MS7r-nUmxBtBRfkL798ymMHrdSkyqGTWlqmFdaKFw&s=10',
  46: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs6s9yZ3tgecqQm59oNYwugyCdv5AmyeYwA_AgAVyUw&s=10',
  47: 'https://houseplantshop.com/cdn/shop/files/Gemini_Generated_Image_b6id5yb6id5yb6id_700x700.png?v=1775489264',
  48: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1VQV-4bQCzGJH8Gy3AwSjGaHAY0TOk8OSAW5kpLC9w&s=10',
  49: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDCm6___G4ZexrH9Nfaf9sRVHXk3wXOqSaVT7Vgt9pA&s=10',
  50: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lk4RXpFK5yOLLYQwFzLPx9O260p4YkRKZv8hTdHvuA&s=10',
  51: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY82siF8VuQf9dxMte6uNAP0JJKabbXEQPBySC2Bd9iA&s=10',
  52: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwSO-g2sCQ8IoUr5O23JGFr6McPcTO0mk_DNo2s_tsQ&s=10',
  53: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfpaolbJdZc5t_6rEsK0_SP8cOgb4sm9OBDb_-nWtHA&s=10',
  54: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCxdb_s4ufKmuEGW2grCAcMVHjcsw5iNZe4v1dLMMgQ&s=10',
  55: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOzGwcQ4hbqAfo-emDJvZxvClEBejj7JDegnPxhzV9Q&s=10',
  56: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5hUNB96FzhqZjg5UTJ5BIPlWOTTtYECu8Nl50iVOfQ&s=10',
  57: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJBfp6ylzTK_fmhqW30OW7yd3GWl47mlZjxiAFb8HaA&s=10',
  58: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqLNeQ8WlfXUoBEXdlV5xC1UkQ_OOOZ7I-4oxxA81eg&s=10',
  59: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyQz-TuuUYY4m8z7H2JXOa3UDGu4g4vWUfx-03Uat8g&s=10',
  60: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpkPlmZbJ-LP4R9PzGgl9Nda2SCnv6_xCxyzUhD7TGA&s=10',
  61: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkejYvZ6owmWD0xeDO5bi_9Wery8ag589kg3JsZAytqA&s=10',
  62: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVqxu9FFMh4fDTmX216UzKIkmImyma6ek9c_XuOsK5w&s=10',
  63: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmC8kb-xnuQSGE-blKmVFdK8mxKnLlaPhI4sZec32dw&s=10',
  64: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIt-JiwR1gpbnohxdbR8_LZ41vKl6AWySlAAYK_n0Gg&s',
  65: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6hhhjjDJbft_S8YROP9YVn_2XQ9cHwz-MdXC7-9Xpw&s=10',
  66: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYicBlddKdqiQulUNg6T0_gbOHO_nEn2lHNpHFX3LfQ&s=10',
};

// ── 66 Products ─────────────────────────────────────────────
const products = [
  { id:1,  name:'Red Rose',                   latin:'Rosa rubiginosa',           category:'flowers',       emoji:'🌹', bg:'#fff0f0', price:22,  origPrice:null, rating:4.9, reviews:821, care:2, badge:'bestseller', light:'Full Sun',        water:'Twice weekly', humidity:'Medium',    desc:'The eternal symbol of love and beauty. Deep crimson petals with a heady fragrance that fills any room. Best given with intention, kept with care.' },
  { id:2,  name:'Sunflower',                  latin:'Helianthus annuus',        category:'flowers',       emoji:'🌻', bg:'#fff8e0', price:16,  origPrice:null, rating:4.8, reviews:634, care:1, badge:null,          light:'Full Sun',        water:'Weekly',    humidity:'Low',       desc:'Nature\'s own sunshine — a giant golden face that literally follows the sun. Cheerful, bold, and impossible not to smile at.' },
  { id:3,  name:'Pink Tulip',                 latin:'Tulipa gesneriana',        category:'flowers',       emoji:'🌷', bg:'#fff0f5', price:18,  origPrice:24,   rating:4.7, reviews:512, care:2, badge:'sale',        light:'Bright Indirect', water:'Weekly',    humidity:'Medium',    desc:'Elegant cup-shaped blooms in the softest blush-pink. A spring classic that signals renewal and hope with effortless grace.' },
  { id:4,  name:'White Daisy',                latin:'Leucanthemum vulgare',     category:'flowers',       emoji:'🌼', bg:'#fffff0', price:12,  origPrice:null, rating:4.8, reviews:398, care:1, badge:null,          light:'Full Sun',        water:'Weekly',    humidity:'Low',       desc:'Simple, joyful, and honest. White petals radiating from a golden centre — the original happy flower. Perfect for beginners.' },
  { id:5,  name:'Lavender',                   latin:'Lavandula angustifolia',   category:'flowers',       emoji:'💜', bg:'#f5f0ff', price:20,  origPrice:null, rating:4.9, reviews:743, care:1, badge:'bestseller',  light:'Full Sun',        water:'Bi-weekly', humidity:'Low',       desc:'Silvery-purple spikes of the most calming fragrance on earth. Dries beautifully, repels moths, and makes every room feel like Provence.' },
  { id:6,  name:'Yellow Daffodil',            latin:'Narcissus pseudonarcissus',category:'flowers',       emoji:'💛', bg:'#fffbe0', price:14,  origPrice:null, rating:4.7, reviews:287, care:1, badge:'new',         light:'Full Sun',        water:'Weekly',    humidity:'Low',       desc:'Trumpet-shaped blooms of brilliant yellow — the first brave flower of spring. Naturalises beautifully and returns bigger every year.' },
  { id:7,  name:'Orchid Phalaenopsis',        latin:'Phalaenopsis amabilis',    category:'flowers',       emoji:'🌸', bg:'#fff0fa', price:45,  origPrice:60,   rating:4.6, reviews:456, care:2, badge:'sale',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Arching sprays of exotic blooms that last for months. The most elegant houseplant money can buy — and easier than its reputation suggests.' },
  { id:8,  name:'Hibiscus',                   latin:'Hibiscus rosa-sinensis',   category:'flowers',       emoji:'🌺', bg:'#fff0ee', price:28,  origPrice:null, rating:4.6, reviews:203, care:2, badge:null,          light:'Full Sun',        water:'Weekly',    humidity:'High',      desc:'Enormous tropical blooms in blazing reds and pinks. Flowers last only a day but the plant produces them relentlessly all summer.' },
  { id:9,  name:'Cherry Blossom',             latin:'Prunus serrulata',         category:'flowers',       emoji:'🌸', bg:'#ffe8f5', price:89,  origPrice:null, rating:5.0, reviews:167, care:3, badge:'rare',        light:'Full Sun',        water:'Weekly',    humidity:'Medium',    desc:'The most celebrated flowering tree in the world. A cloud of pale pink blossoms in spring — a fleeting, transcendent experience.' },
  { id:10, name:'Sunflower Dwarf',            latin:'Helianthus annuus nanus',  category:'flowers',       emoji:'🌻', bg:'#fff5d0', price:13,  origPrice:null, rating:4.8, reviews:321, care:1, badge:'new',         light:'Full Sun',        water:'Weekly',    humidity:'Low',       desc:'All the personality of a full sunflower in a compact pot-friendly size. Bright, cheerful, and perfect on a sunny windowsill.' },
  { id:11, name:'White Lily',                 latin:'Lilium candidum',          category:'flowers',       emoji:'🤍', bg:'#f8f8ff', price:32,  origPrice:null, rating:4.7, reviews:178, care:2, badge:null,          light:'Full Sun',        water:'Weekly',    humidity:'Medium',    desc:'Pure white trumpet blooms with an intoxicating fragrance. Regal, classical, and utterly beautiful. A wedding favourite for centuries.' },
  { id:12, name:'Marigold',                   latin:'Tagetes erecta',           category:'flowers',       emoji:'🟡', bg:'#fff4d0', price:10,  origPrice:null, rating:4.7, reviews:445, care:1, badge:'bestseller',  light:'Full Sun',        water:'Weekly',    humidity:'Low',       desc:'Vivid orange-gold pompoms that bloom from summer to frost. A natural pest deterrent and edible garnish. The workhorse of the flower garden.' },
  { id:13, name:'Monstera Deliciosa',         latin:'Monstera deliciosa',       category:'tropical',      emoji:'🌿', bg:'#e8f5e9', price:48,  origPrice:null, rating:4.9, reviews:534, care:2, badge:'bestseller',  light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'The iconic split-leaf philodendron. Fast-growing and bold — maximum drama, minimum fuss. The king of the indoor jungle.' },
  { id:14, name:'Bird of Paradise',           latin:'Strelitzia reginae',       category:'tropical',      emoji:'🌴', bg:'#e0f5ec', price:135, origPrice:null, rating:4.7, reviews:89,  care:2, badge:'rare',        light:'Full Sun',        water:'Weekly',    humidity:'Medium',    desc:'Bold architectural leaves that unfurl like exotic wings. Transforms any room into a tropical sanctuary instantly.' },
  { id:15, name:'Calathea Ornata',            latin:'Calathea ornata',          category:'tropical',      emoji:'🎋', bg:'#e8f0e0', price:42,  origPrice:null, rating:4.4, reviews:198, care:3, badge:'new',         light:'Low Indirect',    water:'Weekly',    humidity:'Very High', desc:'Hand-painted pin-stripe leaves. Moves with the sun — a living breathing sculpture that surprises you every morning.' },
  { id:16, name:'Alocasia Zebrina',           latin:'Alocasia zebrina',         category:'tropical',      emoji:'🐆', bg:'#e5f0e8', price:58,  origPrice:null, rating:4.5, reviews:94,  care:3, badge:'new',         light:'Bright Indirect', water:'Weekly',    humidity:'Very High', desc:'Tiger-striped stems topped with bold arrow-shaped leaves. Striking and genuinely exotic — a showpiece plant.' },
  { id:17, name:'Aglaonema Red',              latin:'Aglaonema commutatum',     category:'tropical',      emoji:'❤️', bg:'#fce8e8', price:34,  origPrice:45,   rating:4.6, reviews:167, care:2, badge:'sale',        light:'Low to Medium',   water:'Bi-weekly', humidity:'Medium',    desc:'Striking red and green patterned leaves. Brightens dim corners effortlessly with fiery tropical energy.' },
  { id:18, name:'Calathea Rattlesnake',       latin:'Calathea lancifolia',      category:'tropical',      emoji:'🐍', bg:'#e0f0e8', price:38,  origPrice:null, rating:4.5, reviews:145, care:3, badge:null,          light:'Low Indirect',    water:'Weekly',    humidity:'High',      desc:'Wavy long leaves with dark green spots and purple undersides. Moves at dusk — hypnotic and deeply satisfying to watch.' },
  { id:19, name:'Croton Petra',               latin:'Codiaeum variegatum',      category:'tropical',      emoji:'🌈', bg:'#fff3e0', price:32,  origPrice:40,   rating:4.4, reviews:189, care:3, badge:'sale',        light:'Bright Direct',   water:'Weekly',    humidity:'High',      desc:'Explosive kaleidoscope of red, orange, yellow and green foliage. Pure tropical exuberance in a single pot.' },
  { id:20, name:'Stromanthe Sanguinea',       latin:'Stromanthe sanguinea',     category:'tropical',      emoji:'🎨', bg:'#f8e8f5', price:46,  origPrice:null, rating:4.6, reviews:112, care:2, badge:'new',         light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Tricolour leaves of green, cream and magenta-pink beneath. One of the most beautiful foliage plants in existence.' },
  { id:21, name:'Alocasia Polly',             latin:'Alocasia amazonica',       category:'tropical',      emoji:'🐊', bg:'#e0ede5', price:52,  origPrice:null, rating:4.5, reviews:164, care:3, badge:null,          light:'Bright Indirect', water:'Weekly',    humidity:'Very High', desc:'Dark sculptural leaves with dramatic white veins. Bold, brooding, and breathtaking — the apex predator of houseplants.' },
  { id:22, name:'Prayer Plant',               latin:'Maranta leuconeura',       category:'tropical',      emoji:'🙏', bg:'#e8f0e0', price:25,  origPrice:null, rating:4.6, reviews:267, care:2, badge:null,          light:'Low Indirect',    water:'Weekly',    humidity:'High',      desc:'Herringbone-patterned leaves that fold upward at night, like hands in prayer. Meditative and endlessly fascinating.' },
  { id:23, name:'Fiddle Leaf Fig',            latin:'Ficus lyrata',             category:'statement',     emoji:'🌳', bg:'#eaf5ea', price:89,  origPrice:120,  rating:4.5, reviews:142, care:3, badge:'sale',        light:'Bright Direct',   water:'Bi-weekly', humidity:'Medium',    desc:'Designer darling with grand violin-shaped leaves. Rewards consistent care with statuesque indoor-tree beauty.' },
  { id:24, name:'Rubber Plant',               latin:'Ficus elastica',           category:'statement',     emoji:'🫒', bg:'#e5ede0', price:54,  origPrice:70,   rating:4.6, reviews:187, care:2, badge:'sale',        light:'Bright Indirect', water:'Bi-weekly', humidity:'Medium',    desc:'Deep burgundy to forest-green glossy leaves. Grows into a magnificent indoor tree with minimal fuss.' },
  { id:25, name:'Dracaena Marginata',         latin:'Dracaena marginata',       category:'statement',     emoji:'🌴', bg:'#e8f0e0', price:65,  origPrice:null, rating:4.6, reviews:176, care:1, badge:null,          light:'Low to Bright',   water:'Bi-weekly', humidity:'Low',       desc:'Spiky red-edged leaves on elegant canes. Brings structural drama to any room with almost zero effort.' },
  { id:26, name:'Elephant Ear',               latin:'Colocasia esculenta',      category:'statement',     emoji:'🐘', bg:'#e0ede8', price:75,  origPrice:95,   rating:4.6, reviews:87,  care:2, badge:'sale',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Colossal heart-shaped leaves on dramatic stems. Creates instant tropical-jungle atmosphere in any corner.' },
  { id:27, name:'Dieffenbachia',              latin:'Dieffenbachia seguine',    category:'statement',     emoji:'🟢', bg:'#e8f5e0', price:38,  origPrice:50,   rating:4.5, reviews:134, care:2, badge:'sale',        light:'Low to Medium',   water:'Bi-weekly', humidity:'Medium',    desc:'Bold cream-and-green patterned leaves on a thick cane. Lush, tropical, and thoroughly low-drama.' },
  { id:28, name:'Umbrella Plant',             latin:'Schefflera arboricola',    category:'statement',     emoji:'☂️', bg:'#e5ede8', price:45,  origPrice:60,   rating:4.5, reviews:98,  care:2, badge:'sale',        light:'Bright Indirect', water:'Bi-weekly', humidity:'Medium',    desc:'Palmate leaves radiate like elegant green umbrellas. Grows into a graceful indoor tree over time.' },
  { id:29, name:'Golden Pothos',              latin:'Epipremnum aureum',        category:'trailing',      emoji:'💚', bg:'#e8f5e0', price:18,  origPrice:null, rating:5.0, reviews:789, care:1, badge:null,          light:'Low to Bright',   water:'Bi-weekly', humidity:'Any',       desc:'The unkillable beauty. Cascades from shelves, climbs trellises, thrives anywhere. Golden-green and gloriously easy.' },
  { id:30, name:'String of Pearls',           latin:'Curio rowleyanus',         category:'trailing',      emoji:'🍇', bg:'#ede8f5', price:28,  origPrice:36,   rating:4.6, reviews:156, care:2, badge:'sale',        light:'Bright Direct',   water:'Bi-weekly', humidity:'Low',       desc:'Plump spherical leaves cascade like nature\'s beaded curtain. A showstopper in hanging planters or high shelves.' },
  { id:31, name:'String of Hearts',           latin:'Ceropegia woodii',         category:'trailing',      emoji:'💗', bg:'#ffe8f0', price:22,  origPrice:28,   rating:4.9, reviews:389, care:1, badge:'sale',        light:'Bright Indirect', water:'Bi-weekly', humidity:'Low',       desc:'Tiny heart-shaped leaves on gossamer vines. Romantic, delicate, and surprisingly tough. Perfect Valentine\'s gift.' },
  { id:32, name:'Swiss Cheese Plant',         latin:'Monstera adansonii',       category:'trailing',      emoji:'🧀', bg:'#e8f0e0', price:36,  origPrice:null, rating:4.7, reviews:203, care:2, badge:null,          light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Petite holey leaves on cascading vines. Perfect for shelves, trellises or macramé hangers.' },
  { id:33, name:'Tradescantia Zebrina',       latin:'Tradescantia zebrina',     category:'trailing',      emoji:'💜', bg:'#f5e8ff', price:15,  origPrice:null, rating:4.7, reviews:278, care:1, badge:null,          light:'Bright Indirect', water:'Weekly',    humidity:'Medium',    desc:'Purple-silver striped leaves that trail magnificently. Fast-growing and impossibly pretty — propagates in water in days.' },
  { id:34, name:'Philodendron Brasil',        latin:'Philodendron hederaceum',  category:'trailing',      emoji:'🟡', bg:'#fffbe0', price:28,  origPrice:null, rating:4.8, reviews:234, care:1, badge:'bestseller',  light:'Bright Indirect', water:'Weekly',    humidity:'Medium',    desc:'Neon yellow and green heart-shaped leaves that trail in brilliant cascades. Grows at speed and loves to please.' },
  { id:35, name:'Spider Plant',               latin:'Chlorophytum comosum',     category:'trailing',      emoji:'🕷️', bg:'#e8f5e8', price:14,  origPrice:null, rating:4.8, reviews:502, care:1, badge:null,          light:'Any Light',       water:'Bi-weekly', humidity:'Any',       desc:'Cascading green-and-white ribbons. Produces dozens of baby spiderettes — endlessly generous and brilliantly easy.' },
  { id:36, name:'Boston Fern',                latin:'Nephrolepis exaltata',     category:'trailing',      emoji:'🌾', bg:'#e5ede0', price:26,  origPrice:null, rating:4.4, reviews:213, care:3, badge:null,          light:'Indirect',        water:'Twice weekly',humidity:'Very High', desc:'Lush feathery fronds that demand humidity and reward with wild jungle vibes. The queen of hanging baskets.' },
  { id:37, name:'Hoya Carnosa',               latin:'Hoya carnosa',             category:'trailing',      emoji:'🌙', bg:'#f0e8f5', price:35,  origPrice:null, rating:4.8, reviews:225, care:1, badge:null,          light:'Bright Indirect', water:'Bi-weekly', humidity:'Medium',    desc:'Waxy star-shaped flowers and thick succulent-like leaves. Enchanting and long-lived — some hoyas outlive their owners.' },
  { id:38, name:'Satin Pothos',               latin:'Scindapsus pictus',        category:'trailing',      emoji:'🩶', bg:'#e8eef5', price:22,  origPrice:null, rating:4.8, reviews:301, care:1, badge:null,          light:'Low to Medium',   water:'Bi-weekly', humidity:'Any',       desc:'Silvery-satin sheen on heart-shaped leaves. Trails beautifully and tolerates low light graciously.' },
  { id:39, name:'Burro\'s Tail',              latin:'Sedum morganianum',        category:'trailing',      emoji:'🐴', bg:'#e8f5f0', price:22,  origPrice:null, rating:4.7, reviews:176, care:1, badge:null,          light:'Bright to Full Sun',water:'Monthly', humidity:'Low',       desc:'Long stems packed with plump blue-green leaves. Requires a high shelf to cascade from — worth it entirely.' },
  { id:40, name:'Arrowhead Plant',            latin:'Syngonium podophyllum',    category:'trailing',      emoji:'🏹', bg:'#e8f0e8', price:19,  origPrice:null, rating:4.6, reviews:223, care:1, badge:null,          light:'Low to Bright',   water:'Weekly',    humidity:'Medium',    desc:'Arrow-shaped leaves shift from pale green to emerald as it matures. Versatile, lovely, and very forgiving.' },
  { id:41, name:'Pilea Peperomioides',        latin:'Pilea peperomioides',      category:'small',         emoji:'🪴', bg:'#e8f5e8', price:24,  origPrice:null, rating:4.8, reviews:367, care:1, badge:'new',         light:'Medium Indirect', water:'Weekly',    humidity:'Low',       desc:'The friendship plant — constantly produces pups to share. Coins of green happiness on slender stems.' },
  { id:42, name:'Hoya Kerrii',                latin:'Hoya kerrii',              category:'small',         emoji:'💛', bg:'#fffbe0', price:12,  origPrice:null, rating:4.9, reviews:634, care:1, badge:'bestseller',  light:'Bright Indirect', water:'Bi-weekly', humidity:'Low',       desc:'The sweetheart plant — a single heart-shaped leaf that lasts for years. The most perfect little gift.' },
  { id:43, name:'Peperomia Watermelon',       latin:'Peperomia argyreia',       category:'small',         emoji:'🍉', bg:'#e8f5e0', price:20,  origPrice:null, rating:4.8, reviews:398, care:1, badge:null,          light:'Medium Indirect', water:'Bi-weekly', humidity:'Medium',    desc:'Striped like a watermelon, compact like a gem. The most charming small plant you\'ll ever own.' },
  { id:44, name:'Chinese Money Plant',        latin:'Pilea peperomioides',      category:'small',         emoji:'🪙', bg:'#fffbe8', price:21,  origPrice:null, rating:4.8, reviews:445, care:1, badge:'bestseller',  light:'Bright Indirect', water:'Weekly',    humidity:'Low',       desc:'Round paddle leaves on slender stems. Lucky, stylish, and constantly making new babies to share.' },
  { id:45, name:'Lemon Button Fern',          latin:'Nephrolepis cordifolia',   category:'small',         emoji:'🍋', bg:'#fffde0', price:18,  origPrice:null, rating:4.6, reviews:143, care:2, badge:'new',         light:'Indirect',        water:'Weekly',    humidity:'High',      desc:'Tiny button-like leaflets on arching fronds. Compact, cheerful, and subtly citrus-scented when touched.' },
  { id:46, name:'Nerve Plant',                latin:'Fittonia albivenis',       category:'small',         emoji:'🕸️', bg:'#ffe8e8', price:12,  origPrice:null, rating:4.5, reviews:267, care:2, badge:null,          light:'Low Indirect',    water:'Weekly',    humidity:'Very High', desc:'Vivid white or pink vein networks across deep green leaves. A living mosaic — fascinating up close.' },
  { id:47, name:'Aloe Vera',                  latin:'Aloe barbadensis miller',  category:'succulent',     emoji:'🌵', bg:'#e8f5e8', price:16,  origPrice:null, rating:4.9, reviews:789, care:1, badge:null,          light:'Full Sun',        water:'Monthly',   humidity:'Low',       desc:'Nature\'s medicine cabinet. Soothing gel inside, architectural spikes outside. Practically immortal and deeply useful.' },
  { id:48, name:'Echeveria Elegans',          latin:'Echeveria elegans',        category:'succulent',     emoji:'🌸', bg:'#fce8f5', price:10,  origPrice:null, rating:4.8, reviews:428, care:1, badge:null,          light:'Full Sun',        water:'Monthly',   humidity:'Low',       desc:'Powder-blue rosette of fleshy leaves. Hardy, beautiful, and multiplies into beautiful colonies.' },
  { id:49, name:'Cactus Mix',                 latin:'Cactaceae spp.',           category:'succulent',     emoji:'🌵', bg:'#e8f0e8', price:19,  origPrice:null, rating:4.7, reviews:356, care:1, badge:'bestseller',  light:'Full Sun',        water:'Monthly',   humidity:'Very Low',  desc:'A curated trio of desert dwellers. Architectural, timeless, and zero-drama. The easiest plants on earth.' },
  { id:50, name:'Jade Plant',                 latin:'Crassula ovata',           category:'succulent',     emoji:'🍀', bg:'#e8f5e8', price:24,  origPrice:null, rating:4.8, reviews:298, care:1, badge:null,          light:'Full Sun',        water:'Bi-weekly', humidity:'Low',       desc:'The money tree of succulents. Plump jade leaves, thick trunk, grows for decades. A living heirloom.' },
  { id:51, name:'Haworthia Fasciata',         latin:'Haworthia fasciata',       category:'succulent',     emoji:'🦔', bg:'#e8f0e8', price:14,  origPrice:null, rating:4.9, reviews:412, care:1, badge:null,          light:'Indirect',        water:'Monthly',   humidity:'Low',       desc:'Zebra-striped rosette of fleshy leaves. Hardy, adorable, and perfect for tiny shelves or desks.' },
  { id:52, name:'Bunny Ear Cactus',           latin:'Opuntia microdasys',       category:'succulent',     emoji:'🐰', bg:'#f5ffe8', price:18,  origPrice:null, rating:4.8, reviews:287, care:1, badge:'bestseller',  light:'Full Sun',        water:'Monthly',   humidity:'Very Low',  desc:'Flat pads dotted with white spines in the shape of bunny ears. Irresistibly cute and virtually unkillable.' },
  { id:53, name:'Pink Princess Philodendron', latin:'Philodendron erubescens',  category:'rare',          emoji:'🌸', bg:'#ffe8f5', price:165, origPrice:null, rating:4.9, reviews:47,  care:2, badge:'rare',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Coveted magenta variegation — each leaf a unique artwork. Crown jewel of any plant collection.' },
  { id:54, name:'Monstera Albo Variegata',    latin:'Monstera deliciosa albo',  category:'rare',          emoji:'🤍', bg:'#f8f8f0', price:280, origPrice:null, rating:5.0, reviews:31,  care:2, badge:'rare',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'White-splashed leaves of extraordinary rarity. The most coveted houseplant of the decade — a true collector\'s trophy.' },
  { id:55, name:'Anthurium Clarinervium',     latin:'Anthurium clarinervium',   category:'rare',          emoji:'❤️', bg:'#ffe8e8', price:145, origPrice:null, rating:4.8, reviews:62,  care:2, badge:'rare',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Velvety heart-shaped leaves with bright white veins. A collector\'s obsession for good reason.' },
  { id:56, name:'Staghorn Fern',              latin:'Platycerium bifurcatum',   category:'rare',          emoji:'🦌', bg:'#e8f0e8', price:95,  origPrice:null, rating:4.7, reviews:56,  care:2, badge:'rare',        light:'Bright Indirect', water:'Bi-weekly', humidity:'High',      desc:'Spectacular antler-shaped fronds mount on wood or cork. Living wall art that stops people in their tracks.' },
  { id:57, name:'Philodendron Gloriosum',     latin:'Philodendron gloriosum',   category:'rare',          emoji:'🩵', bg:'#e8f5ff', price:195, origPrice:null, rating:4.9, reviews:39,  care:2, badge:'rare',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Velvety heart-shaped leaves with pristine white veins. Crawls majestically along the soil — deeply satisfying.' },
  { id:58, name:'Philodendron Birkin',        latin:'Philodendron Birkin',      category:'rare',          emoji:'🤎', bg:'#f5e8e0', price:58,  origPrice:null, rating:4.8, reviews:134, care:2, badge:'rare',        light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Each new leaf reveals more cream pinstripes on dark green. A plant that keeps surprising you as it grows.' },
  { id:59, name:'Peace Lily',                 latin:'Spathiphyllum wallisii',   category:'flowering',     emoji:'🤍', bg:'#f0f0ff', price:29,  origPrice:null, rating:4.7, reviews:321, care:2, badge:null,          light:'Low Indirect',    water:'Weekly',    humidity:'High',      desc:'Elegant white blooms in low light. Droops dramatically when thirsty — the most honest plant in the shop.' },
  { id:60, name:'Begonia Maculata',           latin:'Begonia maculata',         category:'flowering',     emoji:'🎭', bg:'#ffe8e8', price:44,  origPrice:null, rating:4.7, reviews:118, care:2, badge:'new',         light:'Bright Indirect', water:'Weekly',    humidity:'High',      desc:'Silver-spotted leaves and coral flowers. The polka-dot plant that makes people audibly gasp when they see it.' },
  { id:61, name:'Oxalis Triangularis',        latin:'Oxalis triangularis',      category:'flowering',     emoji:'☘️', bg:'#f5e8ff', price:16,  origPrice:null, rating:4.7, reviews:354, care:1, badge:null,          light:'Bright Indirect', water:'Weekly',    humidity:'Medium',    desc:'Deep purple shamrock leaves that open in sunlight and close at night. Magical to wake up to every morning.' },
  { id:62, name:'Desert Rose',                latin:'Adenium obesum',           category:'flowering',     emoji:'🌹', bg:'#ffe8f0', price:29,  origPrice:null, rating:4.7, reviews:143, care:2, badge:null,          light:'Full Sun',        water:'Bi-weekly', humidity:'Very Low',  desc:'Swollen sculptural trunk crowned with brilliant pink-red flowers. Surreal, stunning, and completely unique.' },
  { id:63, name:'Wax Plant Shooting Stars',   latin:'Hoya multiflora',          category:'flowering',     emoji:'⭐', bg:'#fffff0', price:33,  origPrice:null, rating:4.7, reviews:89,  care:1, badge:'new',         light:'Bright Indirect', water:'Bi-weekly', humidity:'Medium',    desc:'Clusters of star-shaped waxy white flowers with golden centres. Blooms for months — utterly enchanting.' },
  { id:64, name:'Snake Plant',                latin:'Sansevieria trifasciata',  category:'low-maintenance',emoji:'🗡️',bg:'#e8f5e8', price:22,  origPrice:null, rating:4.9, reviews:612, care:1, badge:null,          light:'Any Light',       water:'Monthly',   humidity:'Any',       desc:'Architectural upright leaves. Purifies air, tolerates deep neglect, looks incredible forever. The absolute beginner plant.' },
  { id:65, name:'ZZ Plant',                   latin:'Zamioculcas zamiifolia',   category:'low-maintenance',emoji:'🌱',bg:'#e0f0e0', price:32,  origPrice:null, rating:4.8, reviews:289, care:1, badge:null,          light:'Low Light',       water:'Monthly',   humidity:'Any',       desc:'Virtually indestructible. Glossy waxy leaves stay pristine through neglect and low light. The champion of survival.' },
  { id:66, name:'Cast Iron Plant',            latin:'Aspidistra elatior',       category:'low-maintenance',emoji:'🏋️',bg:'#e8ede8', price:40,  origPrice:null, rating:4.9, reviews:178, care:1, badge:null,          light:'Deep Shade',      water:'Monthly',   humidity:'Any',       desc:'Lives up to its name — survives dark corners, drought, and temperature swings. The ultimate tough plant, no excuses.' },
];

// ── State ─────────────────────────────────────────────────
const state = {
  cart: [],
  wishlist: [],
  currentPage: 'home',
  searchQuery: '',
  activeCategory: 'all',
  sortBy: 'popular',
  maxPrice: 200,
  isDark: false,
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderPage('home');
  initNav();
  initTheme();
  updateCartBadge();
  updateWishlistBadge();
  initScrollBehavior();
});

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('verdant-state') || '{}');
    if (saved.cart)              state.cart     = saved.cart;
    if (saved.wishlist)          state.wishlist = saved.wishlist;
    if (saved.isDark !== undefined) state.isDark = saved.isDark;
  } catch(e) {}
}
function saveState() {
  localStorage.setItem('verdant-state', JSON.stringify({ cart: state.cart, wishlist: state.wishlist, isDark: state.isDark }));
}

// ── Navigation ─────────────────────────────────────────────
function initNav() {
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (link) { e.preventDefault(); navigateTo(link.dataset.page); }
  });
  const toggle = $('#mobileNavToggle');
  const mobileNav = $('#mobileNav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }
}

function navigateTo(page) {
  state.currentPage = page;
  $$('.page').forEach(p => p.classList.remove('active'));
  const target = $(`#page-${page}`);
  if (target) target.classList.add('active');
  $$('[data-page]').forEach(l => {
    if (l.classList.contains('nav-link')) l.classList.toggle('active', l.dataset.page === page);
  });
  $('#mobileNav')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage(page);
}

function renderPage(page) {
  if (page === 'home')    renderHome();
  if (page === 'shop')    renderShop();
  if (page === 'contact') initContactForm();
}

function initScrollBehavior() {
  window.addEventListener('scroll', () => {
    $('.nav')?.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Theme ──────────────────────────────────────────────────
function initTheme() {
  applyTheme();
  $('#themeToggle')?.addEventListener('click', () => { state.isDark = !state.isDark; applyTheme(); saveState(); });
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.isDark ? 'dark' : 'light');
  const toggle = $('#themeToggle');
  if (!toggle) return;
  toggle.classList.toggle('dark', state.isDark);
  const knob = toggle.querySelector('.theme-toggle-knob');
  if (knob) knob.textContent = state.isDark ? '🌙' : '☀️';
}

// ── Cart ───────────────────────────────────────────────────
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) existing.qty += qty; else state.cart.push({ id: productId, qty });
  saveState(); updateCartBadge(); renderCartSidebar();
  showToast(`🌿 ${product.name} added to cart`);
}
function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveState(); updateCartBadge(); renderCartSidebar();
}
function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState(); updateCartBadge(); renderCartSidebar();
}
function updateCartBadge() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  $$('.cart-badge').forEach(b => { b.textContent = total; b.style.display = total > 0 ? 'flex' : 'none'; });
}
function getCartTotal() {
  return state.cart.reduce((s, item) => {
    const p = products.find(pr => pr.id === item.id);
    return s + (p ? p.price * item.qty : 0);
  }, 0);
}
function openCart()  { $('#cartOverlay')?.classList.add('open'); renderCartSidebar(); }
function closeCart() { $('#cartOverlay')?.classList.remove('open'); }

function renderCartSidebar() {
  const body = $('#cartBody');
  const foot = $('#cartFooter');
  if (!body) return;
  if (state.cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="empty-icon">🪴</div><h3>Your cart is empty</h3><p>Add some plants to get started!</p></div>`;
    if (foot) foot.innerHTML = '';
    return;
  }
  body.innerHTML = state.cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    const cImgUrl = plantImages[p.id] || '';
    const cImg = cImgUrl
      ? `<img src="${cImgUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover" />`
      : p.emoji;
    return `<div class="cart-item">
      <div class="cart-item-img" style="background:${p.bg}">${cImg}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">$${p.price} each</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(${p.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${p.id},1)">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})">Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');
  const total = getCartTotal();
  if (foot) foot.innerHTML = `
    <div class="cart-subtotal"><span class="cart-subtotal-label">Subtotal (${state.cart.reduce((s,i)=>s+i.qty,0)} items)</span><span class="cart-subtotal-value">$${total.toFixed(2)}</span></div>
    <p class="cart-shipping-note">🌱 Free shipping on orders over $75</p>
    <button class="btn btn-terra cart-checkout-btn" onclick="showToast('🎉 Thank you! Secure checkout coming soon.')">Checkout — $${total.toFixed(2)}</button>`;
}

// ── Wishlist ───────────────────────────────────────────────
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) { state.wishlist.splice(idx, 1); showToast(`💔 Removed from wishlist`); }
  else           { state.wishlist.push(productId); showToast(`❤️ ${product?.name} added to wishlist`); }
  saveState();
  updateWishlistBadge();
  $$(`[data-wishlist="${productId}"]`).forEach(btn => btn.classList.toggle('wishlisted', state.wishlist.includes(productId)));
  renderWishlistSidebar();
}

function updateWishlistBadge() {
  const total = state.wishlist.length;
  $$('.wishlist-badge').forEach(b => { b.textContent = total; b.style.display = total > 0 ? 'flex' : 'none'; });
}

function openWishlist() {
  $('#wishlistOverlay')?.classList.add('open');
  renderWishlistSidebar();
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  $('#wishlistOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderWishlistSidebar() {
  const body = $('#wishlistBody');
  if (!body) return;
  if (state.wishlist.length === 0) {
    body.innerHTML = `<div class="wishlist-empty"><div class="empty-icon">💔</div><h3>Your wishlist is empty</h3><p>Start adding your favourite plants!</p></div>`;
    return;
  }
  body.innerHTML = state.wishlist.map(id => {
    const p = products.find(pr => pr.id === id);
    if (!p) return '';
    const imgUrl = plantImages[p.id] || '';
    const imgContent = imgUrl
      ? `<img src="${imgUrl}" alt="${p.name}" />`
      : `<span style="font-size:2rem;display:flex;align-items:center;justify-content:center;width:100%;height:100%">${p.emoji}</span>`;
    return `<div class="wishlist-item">
      <div class="wishlist-item-img" style="background:${p.bg}">${imgContent}</div>
      <div class="wishlist-item-details">
        <div class="wishlist-item-name">${p.name}</div>
        <div class="wishlist-item-price">$${p.price}</div>
        <div class="wishlist-item-actions">
          <button class="wishlist-add-cart" onclick="addToCart(${p.id});closeWishlist()">Add to Cart</button>
          <button class="wishlist-item-remove" onclick="toggleWishlist(${p.id});renderWishlistSidebar()">Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Toast ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const toast = $('#toast');
  if (!toast) return;
  toast.querySelector('.toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Product Card HTML ──────────────────────────────────────
function productCardHTML(p) {
  const isWished = state.wishlist.includes(p.id);
  const badgeMap = { bestseller:'bestseller', sale:'sale', rare:'rare', new:'new-badge' };
  const badgeHTML = p.badge ? `<span class="product-badge product-badge-${badgeMap[p.badge] || 'new-badge'}">${p.badge}</span>` : '';
  const origHTML  = p.origPrice ? `<span class="product-price-original">$${p.origPrice}</span>` : '';
  const imgUrl = plantImages[p.id] || '';
  const imgContent = imgUrl
    ? `<img src="${imgUrl}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block" />`
    : `<span class="product-emoji" aria-hidden="true" style="font-size:4rem;line-height:1">${p.emoji}</span>`;
  return `
    <div class="product-card" onclick="openProductDetail(${p.id})" tabindex="0" role="article" aria-label="${p.name}, $${p.price}">
      <div class="product-img" style="background:${p.bg};overflow:hidden;padding:0;position:relative">
        ${imgContent}
        <div class="product-badges">${badgeHTML}</div>
        <div class="product-actions">
          <button class="product-action-btn ${isWished?'wishlisted':''}" data-wishlist="${p.id}"
            onclick="event.stopPropagation();toggleWishlist(${p.id})" aria-label="Wishlist ${p.name}">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="product-action-btn" onclick="event.stopPropagation();addToCart(${p.id})" aria-label="Add ${p.name} to cart">
            <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-latin">${p.latin}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div><span class="product-price">$${p.price}</span>${origHTML}</div>
          <button class="product-add-btn" onclick="event.stopPropagation();addToCart(${p.id})" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>`;
}

// ── Product Detail Modal ───────────────────────────────────
let modalQty = 1;
function openProductDetail(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  modalQty = 1;
  const modal = $('#productModal');
  if (!modal) return;
  const origPrice = p.origPrice ? ` <span style="font-size:.9rem;color:var(--text-light);text-decoration:line-through;margin-left:6px">$${p.origPrice}</span>` : '';
  const savings = p.origPrice ? `<span style="font-size:.7rem;background:#fef2f2;color:#dc2626;padding:2px 8px;border-radius:100px;margin-left:6px">Save $${p.origPrice - p.price}</span>` : '';
  const mImgUrl = plantImages[p.id] || '';
  const mImgContent = mImgUrl
    ? `<img src="${mImgUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block" />`
    : `<span style="font-size:6rem">${p.emoji}</span>`;
  $('#modalContent').innerHTML = `
    <div class="modal-inner">
      <div class="modal-img" style="background:${p.bg}">${mImgContent}</div>
      <div class="modal-details">
        <div class="modal-category">🌿 ${p.category}</div>
        <div class="modal-name">${p.name}</div>
        <div class="modal-latin">${p.latin}</div>
        <div class="modal-rating">
          <span class="stars">${'★'.repeat(Math.round(p.rating))}</span>
          <span style="font-size:.8rem;color:var(--text-mid)">${p.rating} · ${p.reviews} reviews</span>
        </div>
        <div class="modal-price">$${p.price}${origPrice}${savings}</div>
        <p class="modal-desc">${p.desc}</p>
        <div class="modal-care-tags">
          <span class="care-tag">☀️ ${p.light}</span>
          <span class="care-tag">💧 ${p.water}</span>
          <span class="care-tag">🌫️ ${p.humidity}</span>
          <span class="care-tag">🌱 ${['Easy','Moderate','Expert'][p.care-1]}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:12px;background:var(--bg-card);border-radius:8px;border:1px solid var(--border)">
          <span style="font-size:.75rem;color:var(--text-mid);font-weight:500">Qty</span>
          <div style="display:flex;align-items:center;gap:10px;margin-left:auto">
            <button class="qty-btn" onclick="adjustModalQty(-1)">−</button>
            <span class="qty-num" id="modalQtyNum" style="font-size:.85rem">1</span>
            <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-terra" onclick="addToCartFromModal(${p.id})" style="flex:1;justify-content:center;font-size:.8rem;padding:10px 16px">🛒 Add to Cart</button>
          <button class="btn btn-outline" id="modalWishBtn" onclick="toggleWishlist(${p.id});updateModalWishBtn(${p.id})" style="font-size:.8rem;padding:10px 16px">${state.wishlist.includes(p.id)?'❤️':'🤍'}</button>
        </div>
        <p style="font-size:.65rem;color:var(--text-light);margin-top:10px;text-align:center">🚚 Free shipping $75+ · 🌱 30-day guarantee</p>
      </div>
    </div>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function updateModalWishBtn(id) {
  const btn = $('#modalWishBtn');
  if (btn) btn.textContent = state.wishlist.includes(id) ? '❤️' : '🤍';
}
function adjustModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  const el = $('#modalQtyNum'); if (el) el.textContent = modalQty;
}
function addToCartFromModal(id) { addToCart(id, modalQty); closeModal(); }
function closeModal() { $('#productModal')?.classList.remove('open'); document.body.style.overflow = ''; modalQty = 1; }

// ── Filtering ──────────────────────────────────────────────
function getFilteredProducts() {
  let result = [...products];
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }
  if (state.activeCategory !== 'all') result = result.filter(p => p.category === state.activeCategory);
  result = result.filter(p => p.price <= state.maxPrice);
  if (state.sortBy === 'price-asc')  result.sort((a,b) => a.price - b.price);
  if (state.sortBy === 'price-desc') result.sort((a,b) => b.price - a.price);
  if (state.sortBy === 'rating')     result.sort((a,b) => b.rating - a.rating);
  if (state.sortBy === 'popular')    result.sort((a,b) => b.reviews - a.reviews);
  return result;
}

// ── HOME ───────────────────────────────────────────────────
function renderHome() {
  const el = $('#home-products');
  if (!el) return;
  const featured = [...products].sort((a,b) => b.reviews - a.reviews).slice(0, 8);
  el.innerHTML = featured.map(productCardHTML).join('');

  const searchEl = $('#homeSearch');
  const searchBtn = $('#homeSearchBtn');
  if (searchEl && !searchEl._wired) {
    searchEl._wired = true;
    searchEl.addEventListener('keydown', e => { if (e.key === 'Enter') { state.searchQuery = searchEl.value; navigateTo('shop'); } });
  }
  if (searchBtn && !searchBtn._wired) {
    searchBtn._wired = true;
    searchBtn.addEventListener('click', () => { state.searchQuery = $('#homeSearch')?.value || ''; navigateTo('shop'); });
  }
}

// ── SHOP ───────────────────────────────────────────────────
function toggleMobileFilters() {
  const filters = document.getElementById('shopFilters');
  const categories = document.getElementById('shopCategories');
  if (filters) filters.classList.toggle('open');
  if (categories) categories.classList.toggle('open');
}

function renderShop() {
  const grid = $('#shop-products');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const countEl = $('#shopCount');
  if (countEl) countEl.textContent = `${filtered.length} plant${filtered.length !== 1 ? 's' : ''}`;

  grid.innerHTML = filtered.length
    ? filtered.map(productCardHTML).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:40px 0;color:var(--text-mid)"><div style="font-size:3rem;margin-bottom:16px">🌱</div><h3 style="font-family:var(--font-display);margin-bottom:8px">No plants found</h3><p>Try adjusting your search or filters.</p><button class="btn btn-outline" style="margin-top:16px" onclick="state.searchQuery='';state.activeCategory='all';state.maxPrice=200;renderShop()">Clear all filters</button></div>`;

  const shopSearch = $('#shopSearch');
  if (shopSearch && !shopSearch._wired) {
    shopSearch._wired = true;
    shopSearch.value = state.searchQuery;
    shopSearch.addEventListener('input', e => { state.searchQuery = e.target.value; renderShop(); });
  } else if (shopSearch) { shopSearch.value = state.searchQuery; }

  const sort = $('#sortSelect');
  if (sort && !sort._wired) {
    sort._wired = true;
    sort.addEventListener('change', e => { state.sortBy = e.target.value; renderShop(); });
  }
  if (sort) sort.value = state.sortBy;

  $$('.cat-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.cat === state.activeCategory);
    if (!pill._wired) {
      pill._wired = true;
      pill.addEventListener('click', () => { state.activeCategory = pill.dataset.cat; $$('.cat-pill').forEach(p=>p.classList.toggle('active',p.dataset.cat===state.activeCategory)); renderShop(); });
    }
  });

  const slider = $('#priceSlider');
  if (slider && !slider._wired) {
    slider._wired = true;
    slider.max = 200; slider.value = state.maxPrice;
    const label = $('#priceLabel');
    if (label) label.textContent = `$${state.maxPrice}`;
    slider.addEventListener('input', e => { state.maxPrice = parseInt(e.target.value); if (label) label.textContent = `$${state.maxPrice}`; renderShop(); });
  }

  $$('.filter-option').forEach(opt => {
    if (!opt._wired) { opt._wired = true; opt.addEventListener('click', () => opt.classList.toggle('checked')); }
  });
}

// ── CONTACT ────────────────────────────────────────────────
function initContactForm() {
  const form = $('#contactForm');
  if (form && !form._wired) {
    form._wired = true;
  }
}

// ── WhatsApp Redirect ─────────────────────────────────────
function sendWhatsApp(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName')?.value || '';
  const lastName = document.getElementById('lastName')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const subject = document.getElementById('subject')?.value || '';
  const message = document.getElementById('message')?.value || '';

  if (!firstName) {
    showToast('⚠️ Please enter your first name.');
    return;
  }
  if (!email) {
    showToast('⚠️ Please enter your email.');
    return;
  }
  if (!message) {
    showToast('⚠️ Please write a message.');
    return;
  }

  const fullName = firstName + (lastName ? ' ' + lastName : '');
  const text = `Name: ${fullName}%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;
  const phone = '923121146465';
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  showToast('📱 Redirecting to WhatsApp...');
}

// ── LEGAL PAGES ────────────────────────────────────────────
function openTrackOrder() {
  showInfoModal('Track Your Order', `
    <div>
      <p style="color:var(--text-mid);margin-bottom:20px;font-size:.9rem">Enter your order number from your confirmation email.</p>
      <div style="display:flex;gap:10px;margin-bottom:28px">
        <input class="form-control" id="trackInput" placeholder="e.g. VRD-20260627-001" style="flex:1" aria-label="Order number" />
        <button class="btn btn-terra" onclick="runFakeTracker()">Track</button>
      </div>
      <div id="trackerResult"></div>
    </div>
  `);
}

function runFakeTracker() {
  const val = (document.getElementById('trackInput')?.value || '').trim();
  const result = document.getElementById('trackerResult');
  if (!result) return;
  if (!val) { result.innerHTML = `<p style="color:#dc2626;font-size:.875rem">Please enter your order number.</p>`; return; }

  // Check if valid tracking ID (minimum 6 characters)
  if (val.length < 6) {
    result.innerHTML = `<p style="color:#dc2626;font-size:.875rem">❌ Invalid tracking ID. Please check and try again.</p>`;
    return;
  }

  // Generate fake tracking data based on input
  const hash = val.split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  const isDelivered = hash % 3 === 0;
  const isInTransit = !isDelivered && hash % 3 === 1;

  const today = new Date();
  const fmt = d => d.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' });
  const fmtTime = (d, h, m) => { const x = new Date(d); x.setHours(h, m); return x.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' }); };

  const orderDate = new Date(today); orderDate.setDate(today.getDate() - 5);
  const packDate  = new Date(today); packDate.setDate(today.getDate() - 4);
  const shipDate  = new Date(today); shipDate.setDate(today.getDate() - 3);
  const transitDate = new Date(today); transitDate.setDate(today.getDate() - 1);
  const delivDate = new Date(today); delivDate.setDate(today.getDate() - (isDelivered ? 0 : -1));

  const steps = [
    { done: true,     icon: '✅', label: 'Order Confirmed',       sub: `${fmt(orderDate)} at ${fmtTime(orderDate, 14, 32)} — Payment received, order #${val}` },
    { done: true,     icon: '✅', label: 'Packed by Our Team',    sub: `${fmt(packDate)} at ${fmtTime(packDate, 9, 15)} — Your plants were carefully wrapped and packed` },
    { done: true,     icon: '✅', label: 'Dispatched',            sub: `${fmt(shipDate)} at ${fmtTime(shipDate, 11, 48)} — Picked up by Royal Mail Tracked 48` },
    { done: isDelivered || isInTransit, icon: isDelivered || isInTransit ? '✅' : '⏳', label: 'In Transit',  sub: isDelivered || isInTransit ? `${fmt(transitDate)} at ${fmtTime(transitDate, 7, 20)} — Arrived at local sorting depot` : 'Expected today — your parcel is on its way' },
    { done: isDelivered, icon: isDelivered ? '✅' : '📦', label: 'Delivered',     sub: isDelivered ? `${fmt(delivDate)} at ${fmtTime(delivDate, 13, 5)} — Left with neighbour at No. 12` : `Expected by ${fmt(delivDate)} — estimated delivery window: 9am–5pm` },
  ];

  const trackingNum = 'RM' + Math.abs(val.split('').reduce((a,c)=>a+c.charCodeAt(0),0) * 7919 % 9999999999).toString().padStart(9,'0') + 'GB';

  result.innerHTML = `
    <div style="padding:16px;background:var(--bg);border-radius:12px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:4px">Order</div>
        <div style="font-weight:600;color:var(--fg)">${val}</div>
      </div>
      <div>
        <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:4px">Carrier</div>
        <div style="font-weight:600;color:var(--fg)">Royal Mail</div>
      </div>
      <div>
        <div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);margin-bottom:4px">Tracking #</div>
        <div style="font-weight:600;color:var(--sage);font-size:.85rem">${trackingNum}</div>
      </div>
    </div>
    <div style="position:relative;padding-left:32px">
      <div style="position:absolute;left:11px;top:16px;bottom:16px;width:2px;background:var(--border)"></div>
      ${steps.map((s,i) => `
        <div style="position:relative;margin-bottom:${i<steps.length-1?'24px':'0'}">
          <div style="position:absolute;left:-32px;top:2px;width:22px;height:22px;border-radius:50%;background:${s.done ? 'var(--sage)' : 'var(--bg-card)'};border:2px solid ${s.done ? 'var(--sage)' : 'var(--border)'};display:flex;align-items:center;justify-content:center;font-size:.65rem;color:white;font-weight:700">${s.done ? '✓' : ''}</div>
          <div style="font-weight:600;color:${s.done ? 'var(--fg)' : 'var(--text-light)'};font-size:.9rem;margin-bottom:4px">${s.label}</div>
          <div style="font-size:.8rem;color:var(--text-mid);line-height:1.4">${s.sub}</div>
        </div>`).join('')}
    </div>`;
}

function openPrivacyPolicy() {
  showInfoModal('🔒 Privacy Policy', `
    <div style="line-height:1.8;color:var(--text-mid);font-size:.9rem">
      <p style="margin-bottom:12px"><strong style="color:var(--fg)">Last updated: June 2026</strong></p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">What We Collect</h4>
      <p style="margin-bottom:12px">We collect information you provide when placing orders (name, email, delivery address, payment info) and browsing data to improve your experience (cookies, device type, pages visited).</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">How We Use It</h4>
      <p style="margin-bottom:12px">To process your orders, send shipping updates, personalise your plant recommendations, and occasionally send you newsletters (only if you opted in). We never sell your data.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">Cookies</h4>
      <p style="margin-bottom:12px">We use essential cookies for cart functionality and optional analytics cookies to understand how people use our site. You can opt out of analytics cookies at any time.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">Your Rights</h4>
      <p style="margin-bottom:12px">Under GDPR, you have the right to access, correct, or delete your personal data. Email us at <strong>privacy@verdant.co</strong> and we'll respond within 30 days.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">Data Retention</h4>
      <p>We retain order data for 7 years for accounting purposes and browsing data for 24 months. You can request deletion of browsing data at any time.</p>
    </div>
  `);
}

function openTermsOfService() {
  showInfoModal('📋 Terms of Service', `
    <div style="line-height:1.8;color:var(--text-mid);font-size:.9rem">
      <p style="margin-bottom:12px"><strong style="color:var(--fg)">Last updated: June 2026</strong></p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">1. Orders & Payment</h4>
      <p style="margin-bottom:12px">Orders are confirmed once payment is received. We accept all major credit cards and PayPal. Prices are in USD and include VAT where applicable. We reserve the right to cancel orders if plants become unavailable.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">2. Delivery</h4>
      <p style="margin-bottom:12px">We deliver UK-wide within 2-5 business days. Free shipping on orders over $75. We are not responsible for delays caused by couriers or adverse weather conditions affecting live plants.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">3. Our 30-Day Guarantee</h4>
      <p style="margin-bottom:12px">If your plant arrives damaged or dies within 30 days despite following our care guide, we'll replace it free of charge. Simply email a photo to <strong>hello@verdant.co</strong> within 30 days of delivery.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">4. Returns</h4>
      <p style="margin-bottom:12px">Due to the perishable nature of plants, we cannot accept returns. However, our happiness guarantee covers any plant that doesn't thrive in its first 30 days.</p>
      <h4 style="color:var(--fg);margin:20px 0 8px;font-family:var(--font-display);font-size:1.2rem">5. Intellectual Property</h4>
      <p>All content on this website — photography, copy, design — belongs to Verdant Ltd. You may not reproduce it without written permission.</p>
    </div>
  `);
}

function showInfoModal(title, content) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s ease';
  modal.innerHTML = `
    <div style="background:var(--bg);border-radius:20px;max-width:640px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,.3);position:relative">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg);z-index:1;border-radius:20px 20px 0 0">
        <h2 style="font-family:var(--font-display);font-size:1.3rem;font-weight:400">${title}</h2>
        <button onclick="this.closest('div[style*=fixed]').remove()" style="width:32px;height:32px;border-radius:50%;background:var(--bg-card);border:none;cursor:pointer;font-size:.9rem;display:flex;align-items:center;justify-content:center" aria-label="Close">✕</button>
      </div>
      <div style="padding:24px">${content}</div>
    </div>`;
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}
