import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator/Calculator";
import Layout from "./components/Layout";

// Example pages
function Home() {
  return <h1 className="text-2xl font-bold">Home Page</h1>;
}

function Clock() {
  return <h1 className="text-2xl font-bold">Clock Page</h1>;
}

function Stopwatch() {
  return <h1 className="text-2xl font-bold">Stopwatch Page</h1>;
}

// Converter subpages
function CurrencyConverter() {
  return <h1 className="text-2xl font-bold">Currency Converter</h1>;
}
function LengthConverter() {
  return <h1 className="text-2xl font-bold">Length Converter</h1>;
}
function MassConverter() {
  return <h1 className="text-2xl font-bold">Mass Converter</h1>;
}

function TimeConverter() {
  return <h1 className="text-2xl font-bold">Time Converter</h1>;
}

function TemperatureConverter() {
  return <h1 className="text-2xl font-bold">Temperature Converter</h1>;
}

function VelocityConverter() {
  return <h1 className="text-2xl font-bold">Velocity Converter</h1>;
}
// Add other converter pages as needed

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="clock" element={<Clock />} />
          <Route path="stopwatch" element={<Stopwatch />} />

          {/* Converter sub-routes */}
          <Route path="converter/currency" element={<CurrencyConverter />} />
          <Route path="converter/length" element={<LengthConverter />} />
          <Route path="converter/mass" element={<MassConverter />} />
          <Route path="converter/time" element={<TimeConverter />} />
          <Route
            path="converter/temperature"
            element={<TemperatureConverter />}
          />
          <Route path="converter/velocity" element={<VelocityConverter />} />
          {/* Add other converter routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
