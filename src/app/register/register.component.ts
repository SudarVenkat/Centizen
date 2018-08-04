import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService, RegisterService } from '../services';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {	
	registerForm: FormGroup;
    loading = false;
    submitted = false;
	subscriptions:string[]=['Basic','Advanced','Pro'];
	data:any;
	constructor(private formBuilder: FormBuilder,private router: Router,private registerService: RegisterService,private alertService: AlertService){
		this.data=[];
	}
	ngOnInit() {
		//this.registerForm.controls['subscription'].setValue("Advanced", {onlySelf: true});
        this.registerForm = this.formBuilder.group({
			'email': ['', [Validators.required, Validators.email]],
			'subscription': ['Advanced', [Validators.required]],
            'password': ['', [Validators.required,Validators.pattern('^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]]
        });	
		//this.registerForm.controls['subscription'].setValue("Advanced", {onlySelf: true});
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(dataForm) {
		this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
		console.log(this.registerForm.value);
		//this.data.push(this.registerForm.value);
		//console.log(this.data);
		//this.loading = false;
		//this.router.navigate(['/list']);
        //this.registerService.register(this.registerForm.value);
		if(this.registerService.register(this.registerForm.value)){
			this.loading = false;
			this.router.navigate(['/list']);
		}
		
    }
	reset_form(){
		if(confirm("Are you sure to reset Form.")) {
			this.registerForm.reset();
		}
	}
}
