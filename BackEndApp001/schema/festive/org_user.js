var Drive = require("./don_drive");

const Organization = new GraphQLObjectType({
    org_id: int,
    name: string,
    registration_status: string, //(Registered, Unregistered, In-Process)
    registration_Number: string,
    centres = {
        number: int, //(0=online, 1 -> n = #centres)
        name: string,
        type: string, //(headquarter, office, co-working, hotspot, information-centre,)
        location: {
            line1: string,
            line2: string, //(Optional)
            street_addres: string,
            locality: string,
            landmark: string,
            city: string,
            state: string, //(Auto-Suggest)
            zip_code : string, //(Auto-Detect)
            country : string,
            languages_supported: string,
            time_zone: string, //(Auto-Detect)
        }
    },
    personell = {
        role_type: "Founder",
        status: "Active", //(Active, Inactive, Retired, Deceased)
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
    },
    social_media_handles: { //(FB, LinkedIn, Twitter, Blogspot, Website)
        number: 1,
        platform: "Facebook",
        link: "",
        loggedin: "yes"
    },
    picture: "",
    history: {
        total_drives: 1,
        active_drives: 1,
        points: 87,
        rating: points / total_drives,
        drives: {
            type: Drive,
            resolve: function (post) {
                return _.find(Drives, a => a.id == post.drive_id);
            }
        }
    }
});

module.exports = Organization;