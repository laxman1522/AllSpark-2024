$(document).ready(function () {
  function loadScheduleDom(scheduleData, scheduleDomSelector) {
    scheduleData.forEach(function (schedule) {
      var scheduleDom =
        '<div class="schedule-subsection-content-blocks ' +
        schedule.eventType +
        '"><div class="schedule-content-timings"><div class="schedule-content-timings-time">' +
        schedule.timings +
        '<span class="schedule-content-timings-type">' +
        schedule.timingType +
        '</span></div></div><div class="schedule-content-event"><div class="schedule-event-name">' +
        schedule.eventName.toUpperCase() +
        '</div>';
      if (schedule.hasOwnProperty('eventSpeaker'))
        scheduleDom +=
          '<div class="schedule-event-speaker">' +
          schedule.eventSpeaker +
          '</div>';
      scheduleDom += '</div></div>';
      $(scheduleDomSelector).append(scheduleDom);
    });
  }
  var scheduleTechTalkData = {
    isSuccess: true,
    data: [
      {
        eventType: 'break',
        timings: '08:00',
        timingType: 'AM',
        eventName: 'REGISTRATIONS AND BREAKFAST',
      },
      {
        eventType: 'keynote',
        timings: '09:00',
        timingType: 'AM',
        eventName: 'KEYNOTE ADDRESS',
        eventSpeaker: 'Ravi Vungarala, Stephen Morris, Michael Qualley',
      },
      {
        eventType: 'speech',
        timings: '09:50',
        timingType: 'AM',
        eventName: 'Essence of Conversational AI',
        eventSpeaker:
          'Varshinee Venkatesan, Malarvizhi Saravanan, Akshaya Venkatesh',
      },
      {
        eventType: 'speech',
        timings: '10:25',
        timingType: 'AM',
        eventName: 'Next Gen Environment',
        eventSpeaker:
          'John Eipe, Sivanandham Perumalsamy, Saravanakrishnan Kumarasamy, Madhan Balachandar',
      },
      {
        eventType: 'break',
        timings: '11:00',
        timingType: 'AM',
        eventName: 'BREAK',
      },
      {
        eventType: 'speech',
        timings: '11:15',
        timingType: 'AM',
        eventName: 'CLASH OF TITANS 2.0',
        eventSpeaker:
          'Chandrasekar Gokulanathan, Nijin Vinod, AmirthaShankari Kumaralingam, Niranjan Karam, Manigandan Krishnakumar',
      },
      {
        eventType: 'speech',
        timings: '11:50',
        timingType: 'AM',
        eventName: 'Testing in the world of ML',
        eventSpeaker:
          'Rashmee Chhetry, Sharan Anilkumar, Keerthana Elango, Sathish Sugavanam, Varshinee Venkatesan',
      },
      {
        eventType: 'speech',
        timings: '12:25',
        timingType: 'PM',
        eventName: 'Get, Set, Go in minutes with Control Tower',
        eventSpeaker:
          'Santhoshkumar Ravi, Yogalakshmi Murugesan, Rajeshwaran Murugan, Paresh Nerlekar',
      },
      {
        eventType: 'break',
        timings: '01:00',
        timingType: 'PM',
        eventName: 'LUNCH',
      },
      {
        eventType: 'speech',
        timings: '02:00',
        timingType: 'PM',
        eventName: 'ACE SKIT',
        eventSpeaker: 'ACE 2019',
      },
      {
        eventType: 'speech',
        timings: '02:35',
        timingType: 'PM',
        eventName: 'REINFORCEMENT LEARNING',
        eventSpeaker: 'Deepika Narayanaswamy',
      },
      {
        eventType: 'speech',
        timings: '03:10',
        timingType: 'PM',
        eventName: 'NEXT-GEN-MANAGED SERVICES',
        eventSpeaker: 'Sudhavalli Prabhakar, Chandramary Yesuva, Debsuta Roy',
      },
      {
        eventType: 'speech',
        timings: '03:45',
        timingType: 'PM',
        eventName: 'Conquer Market with Marketo',
        eventSpeaker:
          'Divya Sekar, Arthi Jayaraman, Monica Ramireddi, Sagar Parthasarathy',
      },
      {
        eventType: 'break',
        timings: '04:20',
        timingType: 'PM',
        eventName: 'BREAK',
      },
      {
        eventType: 'speech',
        timings: '04:35',
        timingType: 'PM',
        eventName: 'ONESOURCE JAVA',
        eventSpeaker:
          'Vivekanandan Raju, Indhu Loganathan, Sureshbabu Isreal, Kannan Nagasamy',
      },
      {
        eventType: 'keynote',
        timings: '05:10',
        timingType: 'PM',
        eventName: 'Sirius India Awards',
        eventSpeaker: '',
      },
      {
        eventType: 'keynote',
        timings: '05:45',
        timingType: 'PM',
        eventName: 'Culturals',
        eventSpeaker: 'Sirius Rhythms, Steps, Bloopers and More Fun',
      },
      {
        eventType: 'break',
        timings: '06:30',
        timingType: 'PM',
        eventName: 'DRINKS & DINNER',
      },
    ],
  };
  var scheduleSolutionSpaceData = {
    isSuccess: true,
    data: [
      {
        eventType: 'break',
        timings: '08:30',
        timingType: 'AM',
        eventName: 'Breakfast',
      },
      {
        eventType: 'speech',
        timings: '09:30',
        timingType: 'AM',
        eventName: 'Mobile Lab 2.0',
        eventSpeaker:
          'Sharan Anilkumar, Mohit Rathi, Aravindan Uthayasuriyan, Niranjan Karam',
      },
      {
        eventType: 'speech',
        timings: '10:05',
        timingType: 'AM',
        eventName: 'Flex',
        eventSpeaker:
          'Gautham Pughazhendhi, Sharath Ravichandran, Tamilarasan Sekar, Karthick Prasath Mande, Sharan Anilkumar',
      },
      {
        eventType: 'speech',
        timings: '10:40',
        timingType: 'AM',
        eventName: 'The SkyWalker',
        eventSpeaker:
          'John Eipe, Karthick Ilango, Rajeshwaran Murugan, Niranjana Lingeswaran',
      },
      {
        eventType: 'break',
        timings: '11:15',
        timingType: 'AM',
        eventName: 'Break',
      },
      {
        eventType: 'speech',
        timings: '11:30',
        timingType: 'AM',
        eventName: 'AEM Factory',
        eventSpeaker:
          'Gokul Ramesh, Gomati Sundararajulu, Abinaya Muthiyalram, DivyaPriya Ravi, Veena Kumaran, Gladstone Abraham',
      },
      {
        eventType: 'speech',
        timings: '12:05',
        timingType: 'PM',
        eventName: 'Scribble',
        eventSpeaker:
          'Ashok Madhavan Ramesh, Abilash Padmanabhan, Prabhu Raj Aranvoyl Rajan, Chandrasekar Gokulanathan, Gokul Ramesh',
      },
      {
        eventType: 'speech',
        timings: '12:45',
        timingType: 'PM',
        eventName: 'FootSPOT',
        eventSpeaker:
          'Indhu Loganathan, Navyateja Narravula, Naveen Kumar Angappan, Sasi Kumar Chandrasekaran, Venkata Sravan Kumar Maddineni',
      },
      {
        eventType: 'break',
        timings: '01:15',
        timingType: 'PM',
        eventName: 'Lunch',
      },
      {
        eventType: 'speech',
        timings: '02:45',
        timingType: 'PM',
        eventName: 'Parkly',
        eventSpeaker: 'Niranjan Karam',
      },
      {
        eventType: 'speech',
        timings: '03:20',
        timingType: 'PM',
        eventName: 'Bot Test Automation',
        eventSpeaker:
          'Balaji Soundarrajan, Sharath Ravichandran, Kaveri Jeevanantham, Vimal Kumar Nallasamy',
      },
      {
        eventType: 'keynote',
        timings: '03:55',
        timingType: 'PM',
        eventName: 'Curtains down - AllSpark 2019',
      },
    ],
  };
  loadScheduleDom(
    scheduleTechTalkData.data,
    '.tech-talk-section .schedule-subsection-content',
  );
  loadScheduleDom(
    scheduleSolutionSpaceData.data,
    '.solutions-space-section .schedule-subsection-content',
  );
});
