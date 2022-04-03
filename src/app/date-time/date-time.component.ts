import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-date-time',
	templateUrl: './date-time.component.html',
	styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

	constructor(private cdRef:ChangeDetectorRef) { }

	public dt?: Date;
	private subscription?: Subscription;

	ngOnInit(): void {
		this.UpdateTime();
		this.subscription = interval(1000).subscribe(this.UpdateTime.bind(this));
	}
	ngOnDestroy() {
		this.subscription?.unsubscribe();
	}
	UpdateTime(){
		this.dt=new Date();
	}
}
