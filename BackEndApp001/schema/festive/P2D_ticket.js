var drive = require("./don_drive");
var indi = require("./indi_user");
var org = require("./org_user");

const pledge2donation_ticket = new GraphQLObjectType({
    id: int,
    drive_name: "",
    drive_host: "",
    anonymous_doantion: "true/false",
    donor_name: "",
    pledge: "",
    mode: "Pickup or Dropoff",
    token_of_appreciation: "",
    date_of_donation: "",
    pickup_details: {
        pickup_date: "",
        pickup_location: "",
        pickup_staff_info: {

        },
        donor_contact_info: "",
    },
    pickup_initiated: "false",
    pickup_confirmation: "false", //Specifies that the pickup has been made. Made by the person responsible for pickup, 
    pickup_item_details: {
        id: "",
        item_name: "",
        item_picture: "",
        item_quantity: "",
        item_condition: ""
    },
    user_confirmation: "false", //Specifies whether the user confirmed the donation ticket details. done after donation has been made, in real-time.
    org_confirmation: "false", //Specifies whether the NGO received the donation. Done after the donation has reached the ORG.
    direct_beneficiaries: {
        name: "",
        location: "",
        condition: "",
        picture: "",
        thanks_note: "",
    },
    thanks_note_org: "",
});

module.exports = pledge2donation_ticket;