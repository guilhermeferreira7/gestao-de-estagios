import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TJobOffer, UserStudent } from '../Types';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css'],
})
export class StudentHomeComponent implements OnInit {
  jobOpportunities: Array<TJobOffer>;
  user!: UserStudent;

  constructor(private route: ActivatedRoute) {
    this.jobOpportunities = [
      {
        enterprise: 'Empresa X',
        offer: 'Vaga para X',
        description: 'Estamos contratando para...',
      },
      {
        enterprise: 'Empresa Y',
        offer: 'Vaga para Y',
        description: 'Contratamos estagiários para...',
      },
      {
        enterprise: 'Empresa Z',
        offer: 'Vaga para Z',
        description: 'Vagas abertas para estagiários...',
      },
    ];
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];

    //search student with id
    this.user = { id: idParam, name: 'Guilherme', email: 'email' };
  }
}
