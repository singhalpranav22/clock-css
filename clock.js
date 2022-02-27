

function startClock(){
    window.setInterval(function() { 
        let min_hand = document.getElementById('minute-hand');
       let hour_hand = document.getElementById('hour-hand');
       let second_hand = document.getElementById('second-hand');
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = hours % 12;
        let h_deg = (((parseFloat(hours)*60.0 + parseFloat(minutes))/60.0)*360.0)/12.0  + 270.0;
        hour_hand.style.transform = `rotate(${h_deg}deg)`;
        let m_deg = ((parseFloat(minutes)/60.0)*360.0) + 270.0;
        min_hand.style.transform = `rotate(${m_deg}deg)`;
        let s_deg = ((parseFloat(seconds)/60.0)*360.0) + 270.0;
        second_hand.style.transform = `rotate(${s_deg}deg)`;
     }, 100);
}

startClock();