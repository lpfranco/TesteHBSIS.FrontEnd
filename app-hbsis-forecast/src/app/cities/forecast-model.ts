export interface Forecast {
    city: string;
    dateTimeForecast: Date;
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
    humidity: number;
    description: string;
    windSpeed: number;
    windDegree: number;
}