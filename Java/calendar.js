$(document).ready(function () {

    const Sunday = moment().startOf('week').format('ddd MMM Do');
    const Monday = moment().startOf('week').add(1, 'day').format('ddd MMM Do');
    const Tuesday = moment().startOf('week').add(2, 'day').format('ddd MMM Do');
    const Wednesday = moment().startOf('week').add(3, 'day').format('ddd MMM Do');
    const Thursday = moment().startOf('week').add(4, 'day').format('ddd MMM Do');
    const Friday = moment().startOf('week').add(5, 'day').format('ddd MMM Do')
    const Saturday = moment().endOf('week').format('ddd MMM Do');
    const CalDays = [Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];
    const MomentCalFormat = moment().format('ddd MMM Do');
    var config = {
        apiKey: "AIzaSyDrByFzhj9Ak_lZ54uoZEGTcTWKmsWw5LQ",
        authDomain: "project-1-calendar-52aaa.firebaseapp.com",
        databaseURL: "https://project-1-calendar-52aaa.firebaseio.com",
        projectId: "project-1-calendar-52aaa",
        storageBucket: "",
        messagingSenderId: "237185498286"
      };
      firebase.initializeApp(config);

    CalDays.forEach(function(Day) {
        
        const CalDaysTh = $(`
        <th>${Day}</th>
        `);
        const CalDaysTd = $(`
        <td class="${Day}"></td>
        `);
        $(CalDaysTh).appendTo("#CalDaysTh");
        $(CalDaysTd).appendTo("#CalDaysTd");

    });

    console.log(Sunday);
    console.log(Monday);
    console.log(Saturday);
    console.log(MomentCalFormat)
});