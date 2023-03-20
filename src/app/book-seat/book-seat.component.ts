import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent {
  reservationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      members: [1, Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Generate a unique ID using a timestamp
    const id = Date.now().toString();

    // Calculate the seat number based on the timestamp
    const seatNumber = id.slice(-2);

    // Save the reservation data to session storage
    sessionStorage.setItem(seatNumber, JSON.stringify(this.reservationForm?.value));

    // Display an alert with the seat number and unique ID
    alert(`Your reservation has been saved!\nSeat Number: ${seatNumber}\nUnique ID: ${id}`);
  }
}
