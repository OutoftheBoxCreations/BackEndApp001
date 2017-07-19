var f_Drive = require("./don_drive");

const Individual = new GraphQLObjectType({
    name: "",
    age: "",
    gender: "",
    mobile_number: "+##-#####-#####",
    email_id: "abc@xyz.com",
    id_proofs: { //(Aadhar, Passport, PAN, VoterID, Ration Card)
        number: 1,
        type: "Aadhar",
        id: "",
        expiry: ""
    },
    social_handles: { //(FB, LinkedIn, Twitter, Blogspot, Portfolio)
        number: 1,
        platform: "Facebook",
        link: "",
        loggedin: "yes"
    },
    picture: "",
    location: {
        type: "Pickup Point",
        line1: string,
        line2: string, //(Optional)
        street_addres: string,
        locality: string,
        landmark: string,
        city: string,
        state: string, //(Auto-Suggest)
        zip_code: string, //(Auto-Detect)
        country: string,
        languages_supported: string,
        time_zone: string, //(Auto-Detect)
    },
    history: {
        drives_pledged_to: 1,
        drives_contributed_to: 1,
        active_drives: 1,
        total_donations: 1,
        points: f_Drive.drive_id.donation * f_Drive.drive_id.point_multiplier,
        drives: {
            type: Drive,
            resolve: function (post) {
                return _.find(Drives, d => d.id == indi.drive_id);
            }
        }
    }
});

module.exports = Individual;