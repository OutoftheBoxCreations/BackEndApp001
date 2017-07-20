const Don_Drive = new GraphQLObjectType({
    id: int,
    title: "",
    donation_category: "", //(Clothes, Books, Stationery, Food, Blood, Water, Sanitary Products, Medicine)
    beneficieries: {
        afflicted_by: "",
        located_at: ""
    },
    collection_target: int, //(Range)
    collection_till: int, //(Deadline)
    reward: "",
    point_multiplier: 2,
    host: "", //(Automatic)
    person_incharge: "", //(User Input)
    contact_info_PIC: "+##-#####-#####",
    point_of_contact: "",
    contact_info_POC: "+##-#####-#####",
    pictures: {
        drive_start: "",
        donations_start: "",
        donations_midway: "",
        donations_end: "",

    },
    description: {
        long: "upto 2000 words",
        short: "upto 60 words, preferably less"
    },
    collection_mode: "Home Pickup/ Drop off",
    progress: {
        currently_donated: int,
        currently_pledged: int,
        actual_donors: int,
        potential_donors: int,
    }
});

module.exports = Don_Drive;
