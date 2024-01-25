import { SET_NEXT_DAYS } from "../actions/setNextDays";
/*purtroppo sia per quanto riguarda lo stato della const che verrà valorizzata con i dati di questa fetch che per l'altra, ho
dovuto inizializzare lo stato con l'intero oggetto richiamato dalla fetch, altrimenti lo stato non veniva valorizzato correttamente*/

const initialState = {

  nextDays:  { 
        "cod": "",
        "message": 0,
        "cnt": 0,
        "list": [
            {
                "dt": 0,
                "main": {
                    "temp": 0,
                    "feels_like": 0,
                    "temp_min": 0,
                    "temp_max": 0,
                    "pressure": 0,
                    "sea_level": 0,
                    "grnd_level": 0,
                    "humidity": 0,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 0,
                        "main": "",
                        "description": "",
                        "icon": ""
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0,
                    "deg": 0,
                    "gust": 0
                },
                "visibility": 0,
                "pop": 0,
                "sys": {
                    "pod": ""
                },
                "dt_txt": ""
            },
            {
                "dt": 0,
                "main": {
                    "temp": 0,
                    "feels_like": 1.16,
                    "temp_min": 3.15,
                    "temp_max": 5.63,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1014,
                    "humidity": 58,
                    "temp_kf": -2.48
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.05,
                    "deg": 293,
                    "gust": 3.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-20 12:00:00"
            },
            {
                "dt": 1705762800,
                "main": {
                    "temp": 4.74,
                    "feels_like": 2.88,
                    "temp_min": 4.74,
                    "temp_max": 6.15,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1014,
                    "humidity": 44,
                    "temp_kf": -1.41
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.19,
                    "deg": 273,
                    "gust": 3.76
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-20 15:00:00"
            },
            {
                "dt": 1705773600,
                "main": {
                    "temp": 3.59,
                    "feels_like": 1.69,
                    "temp_min": 3.59,
                    "temp_max": 3.59,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1015,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 263,
                    "gust": 4.07
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "nn"
                },
                "dt_txt": "2024-01-20 18:00:00"
            },
            {
                "dt": 1705784400,
                "main": {
                    "temp": 2.5,
                    "feels_like": 0.64,
                    "temp_min": 2.5,
                    "temp_max": 2.5,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 1.84,
                    "deg": 264,
                    "gust": 2.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-20 21:00:00"
            },
            {
                "dt": 1705795200,
                "main": {
                    "temp": 1.7,
                    "feels_like": 1.7,
                    "temp_min": 1.7,
                    "temp_max": 1.7,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 0.87,
                    "deg": 280,
                    "gust": 0.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-21 00:00:00"
            },
            {
                "dt": 1705806000,
                "main": {
                    "temp": 1.18,
                    "feels_like": 1.18,
                    "temp_min": 1.18,
                    "temp_max": 1.18,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.72,
                    "deg": 321,
                    "gust": 0.86
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-21 03:00:00"
            },
            {
                "dt": 1705816800,
                "main": {
                    "temp": 0.67,
                    "feels_like": 0.67,
                    "temp_min": 0.67,
                    "temp_max": 0.67,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.49,
                    "deg": 278,
                    "gust": 0.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-21 06:00:00"
            },
            {
                "dt": 1705827600,
                "main": {
                    "temp": 2.36,
                    "feels_like": 2.36,
                    "temp_min": 2.36,
                    "temp_max": 2.36,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 11
                },
                "wind": {
                    "speed": 0.9,
                    "deg": 264,
                    "gust": 1.32
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-21 09:00:00"
            },
            {
                "dt": 1705838400,
                "main": {
                    "temp": 4.68,
                    "feels_like": 3.68,
                    "temp_min": 4.68,
                    "temp_max": 4.68,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 24,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 53
                },
                "wind": {
                    "speed": 1.43,
                    "deg": 254,
                    "gust": 1.86
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-21 12:00:00"
            },
            {
                "dt": 1705849200,
                "main": {
                    "temp": 4.88,
                    "feels_like": 3.88,
                    "temp_min": 4.88,
                    "temp_max": 4.88,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.45,
                    "deg": 263,
                    "gust": 2.4
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-21 15:00:00"
            },
            {
                "dt": 1705860000,
                "main": {
                    "temp": 2.8,
                    "feels_like": 1.33,
                    "temp_min": 2.8,
                    "temp_max": 2.8,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 36,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 69
                },
                "wind": {
                    "speed": 1.58,
                    "deg": 262,
                    "gust": 1.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-21 18:00:00"
            },
            {
                "dt": 1705870800,
                "main": {
                    "temp": 1.93,
                    "feels_like": 0.29,
                    "temp_min": 1.93,
                    "temp_max": 1.93,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 259,
                    "gust": 1.6
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-21 21:00:00"
            },
            {
                "dt": 1705881600,
                "main": {
                    "temp": 1.43,
                    "feels_like": -0.29,
                    "temp_min": 1.43,
                    "temp_max": 1.43,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 270,
                    "gust": 1.6
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-22 00:00:00"
            },
            {
                "dt": 1705892400,
                "main": {
                    "temp": 1.05,
                    "feels_like": -0.53,
                    "temp_min": 1.05,
                    "temp_max": 1.05,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 1.48,
                    "deg": 268,
                    "gust": 1.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-22 03:00:00"
            },
            {
                "dt": 1705903200,
                "main": {
                    "temp": 0.84,
                    "feels_like": -1.22,
                    "temp_min": 0.84,
                    "temp_max": 0.84,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 23
                },
                "wind": {
                    "speed": 1.8,
                    "deg": 264,
                    "gust": 1.74
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-22 06:00:00"
            },
            {
                "dt": 1705914000,
                "main": {
                    "temp": 2.64,
                    "feels_like": 1.13,
                    "temp_min": 2.64,
                    "temp_max": 2.64,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 37
                },
                "wind": {
                    "speed": 1.59,
                    "deg": 261,
                    "gust": 2.76
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-22 09:00:00"
            },
            {
                "dt": 1705924800,
                "main": {
                    "temp": 5.77,
                    "feels_like": 4.26,
                    "temp_min": 5.77,
                    "temp_max": 5.77,
                    "pressure": 1031,
                    "sea_level": 1031,
                    "grnd_level": 1014,
                    "humidity": 31,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 55
                },
                "wind": {
                    "speed": 2.01,
                    "deg": 262,
                    "gust": 3.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-22 12:00:00"
            },
            {
                "dt": 1705935600,
                "main": {
                    "temp": 5.47,
                    "feels_like": 4.33,
                    "temp_min": 5.47,
                    "temp_max": 5.47,
                    "pressure": 1029,
                    "sea_level": 1029,
                    "grnd_level": 1012,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 274,
                    "gust": 3.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-22 15:00:00"
            },
            {
                "dt": 1705946400,
                "main": {
                    "temp": 4.45,
                    "feels_like": 2.84,
                    "temp_min": 4.45,
                    "temp_max": 4.45,
                    "pressure": 1029,
                    "sea_level": 1029,
                    "grnd_level": 1012,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.9,
                    "deg": 302,
                    "gust": 3.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-22 18:00:00"
            },
            {
                "dt": 1705957200,
                "main": {
                    "temp": 3.83,
                    "feels_like": 2.84,
                    "temp_min": 3.83,
                    "temp_max": 3.83,
                    "pressure": 1027,
                    "sea_level": 1027,
                    "grnd_level": 1011,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 1.34,
                    "deg": 288,
                    "gust": 1.5
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-22 21:00:00"
            },
            {
                "dt": 1705968000,
                "main": {
                    "temp": 3.03,
                    "feels_like": 0.91,
                    "temp_min": 3.03,
                    "temp_max": 3.03,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1012,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 2.15,
                    "deg": 262,
                    "gust": 2.83
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-23 00:00:00"
            },
            {
                "dt": 1705978800,
                "main": {
                    "temp": 2.39,
                    "feels_like": 2.39,
                    "temp_min": 2.39,
                    "temp_max": 2.39,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1013,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.68,
                    "deg": 198,
                    "gust": 0.82
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-23 03:00:00"
            },
            {
                "dt": 1705989600,
                "main": {
                    "temp": 1.43,
                    "feels_like": -0.34,
                    "temp_min": 1.43,
                    "temp_max": 1.43,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 18
                },
                "wind": {
                    "speed": 1.65,
                    "deg": 90,
                    "gust": 2.5
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-23 06:00:00"
            },
            {
                "dt": 1706000400,
                "main": {
                    "temp": 2.8,
                    "feels_like": 1.29,
                    "temp_min": 2.8,
                    "temp_max": 2.8,
                    "pressure": 1035,
                    "sea_level": 1035,
                    "grnd_level": 1018,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 1.61,
                    "deg": 63,
                    "gust": 2.39
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-23 09:00:00"
            },
            {
                "dt": 1706011200,
                "main": {
                    "temp": 6.11,
                    "feels_like": 6.11,
                    "temp_min": 6.11,
                    "temp_max": 6.11,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 0.69,
                    "deg": 20,
                    "gust": 1.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-23 12:00:00"
            },
            {
                "dt": 1706022000,
                "main": {
                    "temp": 6.66,
                    "feels_like": 5.91,
                    "temp_min": 6.66,
                    "temp_max": 6.66,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1016,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 247,
                    "gust": 1.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-23 15:00:00"
            },
            {
                "dt": 1706032800,
                "main": {
                    "temp": 4.69,
                    "feels_like": 4.69,
                    "temp_min": 4.69,
                    "temp_max": 4.69,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 56
                },
                "wind": {
                    "speed": 1.05,
                    "deg": 238,
                    "gust": 1.05
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-23 18:00:00"
            },
            {
                "dt": 1706043600,
                "main": {
                    "temp": 4.01,
                    "feels_like": 4.01,
                    "temp_min": 4.01,
                    "temp_max": 4.01,
                    "pressure": 1035,
                    "sea_level": 1035,
                    "grnd_level": 1018,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 31
                },
                "wind": {
                    "speed": 0.37,
                    "deg": 267,
                    "gust": 0.4
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-23 21:00:00"
            },
            {
                "dt": 1706054400,
                "main": {
                    "temp": 3.57,
                    "feels_like": 3.57,
                    "temp_min": 3.57,
                    "temp_max": 3.57,
                    "pressure": 1034,
                    "sea_level": 1034,
                    "grnd_level": 1017,
                    "humidity": 55,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 51
                },
                "wind": {
                    "speed": 0.65,
                    "deg": 291,
                    "gust": 0.63
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-24 00:00:00"
            },
            {
                "dt": 1706065200,
                "main": {
                    "temp": 3.37,
                    "feels_like": 3.37,
                    "temp_min": 3.37,
                    "temp_max": 3.37,
                    "pressure": 1033,
                    "sea_level": 1033,
                    "grnd_level": 1017,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.03,
                    "deg": 261,
                    "gust": 1
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-24 03:00:00"
            },
            {
                "dt": 1706076000,
                "main": {
                    "temp": 3.31,
                    "feels_like": 1.9,
                    "temp_min": 3.31,
                    "temp_max": 3.31,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1016,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.59,
                    "deg": 268,
                    "gust": 1.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-24 06:00:00"
            },
            {
                "dt": 1706086800,
                "main": {
                    "temp": 4.71,
                    "feels_like": 3.6,
                    "temp_min": 4.71,
                    "temp_max": 4.71,
                    "pressure": 1032,
                    "sea_level": 1032,
                    "grnd_level": 1015,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 259,
                    "gust": 3.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-24 09:00:00"
            },
            {
                "dt": 1706097600,
                "main": {
                    "temp": 8.54,
                    "feels_like": 7.24,
                    "temp_min": 8.54,
                    "temp_max": 8.54,
                    "pressure": 1030,
                    "sea_level": 1030,
                    "grnd_level": 1014,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.3,
                    "deg": 259,
                    "gust": 3.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-24 12:00:00"
            },
            {
                "dt": 1706108400,
                "main": {
                    "temp": 9.19,
                    "feels_like": 8.12,
                    "temp_min": 9.19,
                    "temp_max": 9.19,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1012,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 2.16,
                    "deg": 261,
                    "gust": 5.52
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-01-24 15:00:00"
            },
            {
                "dt": 1706119200,
                "main": {
                    "temp": 7.28,
                    "feels_like": 5.74,
                    "temp_min": 7.28,
                    "temp_max": 7.28,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1011,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 2.33,
                    "deg": 275,
                    "gust": 5.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-24 18:00:00"
            },
            {
                "dt": 1706130000,
                "main": {
                    "temp": 6.49,
                    "feels_like": 5.03,
                    "temp_min": 6.49,
                    "temp_max": 6.49,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1011,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 259,
                    "gust": 3.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-24 21:00:00"
            },
            {
                "dt": 1706140800,
                "main": {
                    "temp": 5.91,
                    "feels_like": 5.91,
                    "temp_min": 5.91,
                    "temp_max": 5.91,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1011,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.03,
                    "deg": 255,
                    "gust": 1.07
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-25 00:00:00"
            },
            {
                "dt": 1706151600,
                "main": {
                    "temp": 5.36,
                    "feels_like": 5.36,
                    "temp_min": 5.36,
                    "temp_max": 5.36,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1011,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.09,
                    "deg": 128,
                    "gust": 0.77
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-25 03:00:00"
            },
            {
                "dt": 1706162400,
                "main": {
                    "temp": 4.46,
                    "feels_like": 4.46,
                    "temp_min": 4.46,
                    "temp_max": 4.46,
                    "pressure": 1028,
                    "sea_level": 1028,
                    "grnd_level": 1012,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 0.73,
                    "deg": 67,
                    "gust": 0.87
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-01-25 06:00:00"
            }
        ],
        "city": {
            "id": 3173435,
            "name": "Milan",
            "coord": {
                "lat": 45.4643,
                "lon": 9.1895
            },
            "country": "IT",
            "population": 1000000,
            "timezone": 3600,
            "sunrise": 1705733791,
            "sunset": 1705767073
        }
    }
}


const stateReducer = (state = initialState, action) => {
     //con lo switch case dichiaro che il reducer ritornerà come stato di nextDays il nuovo payload della action SET_NEXT_DAYS o di default lo stato iniziale.
    switch (action.type) {
        case SET_NEXT_DAYS:
           
            return{
                ...state,
                nextDays: action.payload,
            };
            default:
                 return state;
    }
}
export default stateReducer
