const Individual = new GraphQLObjectType({
    title: "",
    donation_category: "", //(Clothes, Books, Stationery, Food, Blood, Water, Sanitary Products, Medicine)
    beneficiries: {
        afflicted_by: "",
        located_at: ""
    },
    collection_target: int, //(Range)
    host: "",
})

module.exports = Individual;
