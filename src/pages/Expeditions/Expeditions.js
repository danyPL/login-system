import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import Clock from "../Expeditions/Clock";
import { useEffect } from "react";

const Expeditions = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("October 30,2023 ").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          // Stop Timer
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });

  return (
    <div class="container w-50">
      
      
      <header class="rounded bg-dark p-2 text-center d-flex justify-content-center shadow">
      <Clock 
      timerDays={timerDays}
      timerHours={timerHours}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      />
      </header>
      
      <div class="shadow p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-8">.col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <div class="row">
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>

        <div class="row">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>
      </div>
    </div>
  )
}

export default Expeditions