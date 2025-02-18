const stationSequences = {
  "Blue Line": [
    "Wimco Nagar Depot",
    "Wimco Nagar",
    "Tiruvottriyur",
    "Tiruvottriyur Theradi",
    "Kaladipet",
    "Tollgate",
    "New Washermanpet",
    "Tondiarpet",
    "Sir Theagaraya College",
    "Washermanpet",
    "Mannadi",
    "High Court",
    "Central Metro",
    "Government Estate",
    "LIC",
    "Thousand Lights",
    "AG-DMS",
    "Teynampet",
    "Nandanam",
    "Saidapet",
    "Little Mount",
    "Guindy",
    "Alandur",
    "Nanganallur Road",
    "Meenambakkam",
    "Chennai Airport",
  ],
  "Green Line": [
    "Central Metro",
    "Egmore",
    "Nehru Park",
    "Kilpauk",
    "Pachaiyappa's College",
    "Shenoy Nagar",
    "Anna Nagar East",
    "Anna Nagar Tower",
    "Thirumangalam",
    "Koyambedu",
    "CMBT",
    "Arumbakkam",
    "Vadapalani",
    "Ashok Nagar",
    "Ekkattuthangal",
    "Alandur",
    "St. Thomas Mount",
  ],
  "Purple Line": [
    "Madhavaram Milk Colony",
    "Madhavaram High Road",
    "Moolakadai",
    "Sembiyam",
    "Perambur Market",
    "Perambur",
    "Ayanavaram",
    "Otteri",
    "Pattalam",
    "Perambur Barracks Road",
    "Purasaiwakkam",
    "Kellys",
    "Kilpauk",
    "Chetpet",
    "Sterling Road",
    "Nungambakkam",
    "Anna Flyover",
    "Thousand Lights",
    "Royapettah",
    "Dr. Radhakrishnan Salai",
    "Thiruvanmiyur",
    "Thirumayilai",
    "Mandaiveli",
    "Greenways Road",
    "Adyar Junction",
    "Adyar Depot",
    "Indira Nagar",
    "Thiruvanmiyur",
    "Taramani",
    "Nehru Nagar",
    "Perungudi",
    "Thoraipakkam",
    "Mettukuppam",
    "PTC Colony",
    "Okkiyampet",
    "Karapakkam",
    "Okkiyam Thoraipakkam",
    "Sholinganallur",
    "Sholinganallur Lake I",
    "Sholinganallur Lake II",
    "Nookampalayam Depot",
    "Semmancheri I",
    "Semmancheri II",
    "Gandhi Nagar",
    "Navallur",
    "Siruseri",
    "SIPCOT I",
    "SIPCOT II"
  ],
  "Orange Line": [
    "Lighthouse",
    "Kutchery Road",
    "Thirumayilai",
    "Alwarpet",
    "Bharathidasan Road",
    "Boat Club",
    "Nandanam",
    "Panagal Park",
    "Kodambakkam",
    "Power House",
    "Vadapalani",
    "Saligramam",
    "Saligramam Ware House",
    "Alwarthiru Nagar",
    "Valasaravakkam",
    "Karambakkam",
    "Alapakkam Junction",
    "Porur Junction",
    "Porur Bypass",
    "Thelliyaragaram",
    "Iyyapanthangal",
    "Kattupakkam",
    "Kumananchavadi",
    "Karayanchavadi",
    "Mullaithottam",
    "Poonamallee",
    "Poonamallee Depot",
    "Poonamallee Bypass"
  ],
  "Red Line": [
    "Madhavaram Milk Colony",
    "Madhavaram Milk Colony",
    "Assisi Nagar",
    "Manjambakkam",
    "Velmurugan Nagar",
    "Madhavaram Bus Terminus",
    "Shastri Nagar",
    "Retteri Junction",
    "Kolathur Junction",
    "Srinivasa Nagar",
    "Villivakkam",
    "Villivakkam Bus Terminus",
    "Villivakkam MTH Road",
    "Anna Nagar West",
    "Thirumangalam",
    "Anna Nagar KV",
    "Koyambedu",
    "Koyambedu Market",
    "Natesan Nagar",
    "Virugambakkam",
    "Alwarthirunagar",
    "Valasaravakkam",
    "Karambakkam",
    "Alapakkam Junction",
    "Mugalivakkam",
    "Ramapuram",
    "Manapakkam",
    "Chennai Trade Centre",
    "Butt Road",
    "Alandur",
    "St. Thomas Mount",
    "Adambakkam",
    "Vanuvampet",
    "Ullagaram",
    "Madipakkam",
    "Kilkattalai",
    "Eechangadu",
    "Kovilambakkam",
    "Vellakkal",
    "Medavakkam I",
    "Medavakkam II",
    "Perumbakkam",
    "Semmozhi Poonga",
    "ELCOT",
    "Sholinganallur"
  ],
  "South Line": [
    "Chennai Beach",
    "Chennai Fort",
    "Chennai Egmore",
    "Chetpet",
    "Nungambakkam",
    "Kodambakkam",
    "Mambalam",
    "Saidapet",
    "Guindy",
    "St. Thomas Mount",
    "Pazhavanthangal",
    "Meenambakkam",
    "Tirusulam",
    "Pallavaram",
    "Chromepet",
    "Tambaram Sanatorium",
    "Tambaram",
    "Perungalathur",
    "Vandalur",
    "Urapakkam",
    "Guduvancheri",
    "Potheri",
    "Kattangulathur",
    "Maraimalai Nagar",
    "Singaperumal Koil",
    "Paranur",
    "Chengalpattu"
  ],
  "West Line": [
    "Central Moore Market Complex",
    "Basin Bridge Junction",
    "Vyasarpadi Jeeva",
    "Perambur",
    "Perambur Carriage Works",
    "Perambur Loco Works",
    "Villivakkam",
    "Korattur",
    "Pattaravakkam",
    "Ambattur",
    "Thirumullaivoyal",
    "Annanur",
    "Avadi",
    "Hindu College",
    "Pattabiram",
    "Pattabiram Military Siding",
    "Pattabiram East Depot",
    "Nemilichery",
    "Thiruninravur",
    "Veppampattu",
    "Sevvapet Road",
    "Putlur",
    "Tiruvallur",
    "Egattur",
    "Kadambattur",
    "Senji Panambakkam",
    "Manavur",
    "Thiruvalangadu",
    "Mosur",
    "Puliyamangalam",
    "Arakkonam Junction"
  ],
  "North Line": [
    "Central Moore Market Complex",
    "Basin Bridge Junction",
    "Vyasarpadi Jeeva",
    "Korukkupet",
    "Tondiarpet",
    "V.O.C. Nagar",
    "Tiruvottiyur",
    "Wimco Nagar",
    "Kathivakkam",
    "Ennore",
    "Athipattu Pudhunagar",
    "Athipattu",
    "Nandiambakkam",
    "Minjur",
    "Anuppambattu",
    "Ponneri",
    "Kavaraipettai",
    "Gummidipoondi"
  ],
  "MRTS": [
    "Chennai Beach",
    "Chennai Fort",
    "Chennai Park Town",
    "Chintadripet",
    "Chepauk",
    "Tiruvallikeni",
    "Light House",
    "Thirumayilai",
    "Mandaveli",
    "Greenways Road",
    "Kotturpuram",
    "Kasthurba Nagar",
    "Indira Nagar",
    "Tiruvanmiyur",
    "Taramani",
    "Perungudi",
    "Velachery"
  ]

};

export default stationSequences;
