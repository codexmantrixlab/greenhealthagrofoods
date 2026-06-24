const ingredients = [
  {
    id: 1,
    name: 'Stevia',
    emoji: '🌿',
    tagline: 'Natural Sweetener — Zero Calories, Maximum Benefits',
    image: '/stevia.png',
    fallbackImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    color: 'from-emerald-500 to-teal-400',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    highlights: [
      '15–200× sweeter than table sugar',
      '100% natural, zero calories',
      'Excellent for diabetics & hypoglycemics',
      'Stabilizes blood sugar levels',
      'Aids in weight loss & management',
    ],
    description: `Stevia as "Natural Sweetener" is one of the most health restoring plants on earth — an incredibly sweet herb whose nutrient value is 15–200 times sweeter than table sugar, 100% natural.

Besides the intensely sweet glycosides (Steviosides, Rebaudioside, and Dulcoside), the body does not metabolize them, hence zero calories are associated with stevia. This makes stevia an excellent substitute for table sugar used by diabetics and hypoglycemics.

India has experienced a huge increase in sufferers of diabetes and stevia has become a popular sugar substitute. Various studies have found the leaf contains proteins, Fiber, Carbohydrates, Iron, Phosphorus, Calcium, Potassium, Sodium, Magnesium, Zinc, Rutin (a flavonoid), Vitamin A, Vitamin C and oil which contains 53 other constituents.

There are abundant health benefits of Stevia, including lower blood pressure, no calories, hunger suppressant, and stabilized blood sugar levels. Replacement of sugars provides consistent energy — stevia is an exceptional aid in weight loss and weight management because it contains no calories, hence considered a dietary supplement.

Scientific research has indicated that stevia effectively regulates blood sugar and brings it toward a normal balance. An important benefit for hypoglycemics is stevia's tonic action which enhances increased energy levels and mental acuity.`,
  },
  {
    id: 2,
    name: 'Mushroom',
    emoji: '🍄',
    tagline: 'Nutrient-Dense Superfood Rich in Protein & Minerals',
    image: '/mushroom.png',
    fallbackImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=400&fit=crop',
    color: 'from-amber-500 to-orange-400',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    highlights: [
      'Richer in protein than cereals & pulses',
      'High in Vitamins B1, B12 & Folic acid',
      'Rich in 18 amino acids including glutamic acid',
      'Powerful antitumor & immunostimulating properties',
      'Natural source of cholesterol-lowering statins',
    ],
    description: `Mushrooms are nutritive and are richer in protein than cereals, pulses, fruits, and vegetables. They contain carbohydrates, fibers, and vitamins with the highest content value of Vitamins B1, B12, and are richer in Folic acid.

Mushroom has an ample amount of minerals such as calcium, phosphorus, potassium, iron, copper, zinc, magnesium, manganese, and antioxidants as well as 18 amino acids — especially glutamic acid and taurine.

Mushroom contains an unlimited source of polysaccharides with antitumor and immunostimulating properties, and an unlimited source of statin (cholesterol-lowering) drugs. Studies have shown that they typically contain 0.4% to 2.7% statins.`,
  },
  {
    id: 3,
    name: 'Spirulina',
    emoji: '',
    tagline: 'The World\'s Most Powerful Superfood',
    image: '/spirulina.png',
    fallbackImage: 'https://images.unsplash.com/photo-1612540139150-3e1db4b2fb1a?w=600&h=400&fit=crop',
    color: 'from-indigo-500 to-blue-400',
    bgLight: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    textColor: 'text-indigo-700',
    highlights: [
      '60%+ all-vegetable protein',
      'Rich in Vitamin B12, B-complex & Vitamin E',
      'All essential amino acids',
      'Beta-carotene 10× more than carrots',
      'NASA: 1kg = 1,000 kgs of fruits & vegetables',
    ],
    description: `Spirulina is a genus of blue-green algae consumed by health-conscious people all over the world, containing the most powerful combination of nutrients ever known in any grain, herb, or food.

It consists of a high amount of protein and vitamin B12 and B complex, vitamin E, with all essential amino acids, rich in iron, magnesium, and trace elements. Spirulina has been extensively tested by scientists around the world and is found to be the most powerful and well-balanced source of nutrition available on the planet.

As stated by NASA: "The nutritional value of 1 kg spirulina is equivalent to 1,000 kgs of assorted fruits and vegetables." Spirulina is called a superfood because its nutrient content is more potent than any other food. Many of the essential needs of our bodies are concentrated in spirulina.

It is comprised of at least 60% all-vegetable protein, essential vitamins, phytonutrients such as the rare essential fatty acid GLA (Gamma Linolenic acid), sulfolipids, glycolipids, and polysaccharides, which enhance the immune system. Spirulina contains Chlorophyll — referred to as nature's green magic for the natural cleansing process. It consists of antioxidants and Beta-carotene which is ten times more concentrated than carrots, reducing long-term health risks.`,
  },
];

const Ingredients = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-700 to-indigo-600 py-14 px-4 text-white text-center">
        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full border border-white/30 mb-4">
          🌱 What Goes Inside
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">Basic Ingredients in Pot</h1>
        <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto">
          Every product we make is powered by nature's finest. Here's an in-depth look at the key ingredients that make Green Health products exceptional.
        </p>
      </section>

      {/* Ingredient Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {ingredients.map((ing, idx) => (
          <div
            key={ing.id}
            className={`bg-white rounded-3xl shadow-md border ${ing.borderColor} overflow-hidden`}
          >
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${ing.color} px-8 py-6 text-white`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{ing.emoji}</span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">— {ing.name} —</h2>
                  <p className="text-white/85 text-sm mt-1">{ing.tagline}</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Image */}
              <div className="md:col-span-1">
                <img
                  src={ing.image}
                  alt={ing.name}
                  className="w-full h-56 object-cover rounded-2xl shadow-sm"
                />
                {/* Highlights */}
                <div className={`mt-5 ${ing.bgLight} rounded-2xl p-4 border ${ing.borderColor}`}>
                  <h4 className={`font-bold text-sm ${ing.textColor} mb-3 uppercase tracking-wider`}>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {ing.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className={`mt-0.5 font-bold ${ing.textColor}`}>✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {ing.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-indigo-700 to-orange-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Pure Ingredients. Real Results.</h2>
        <p className="text-white/80 text-sm max-w-lg mx-auto">
          Every Green Health product is crafted using these powerful natural ingredients to bring you the best of nature's goodness.
        </p>
      </section>
    </div>
  );
};

export default Ingredients;
