// <div class="container-fluid">
//   <form class="form-row" [formGroup]="activityForm" (ngSubmit)="updateActivityfunction()">
//     <fieldset class="col-12">
//       <div class="row">
//         <mat-form-field class="col-12" *ngIf="!isDisable">
//           <mat-label>Name activity</mat-label>
//           <input matInput placeholder="Name activity" appInputRestriction="activityName" removeSpace="oneRemain"
//             formControlName="nameActivity" type="text">
//           <mat-error *ngIf="activityForm.controls['nameActivity']?.invalid">
//             {{getErrorMessage('nameActivity')}}</mat-error>
//         </mat-form-field>
//         <div class="col-12">
//           <h3 class="titleRag">Activity Definition</h3>
//         </div>
//       </div>
//       <mat-divider class="dividerFilter"></mat-divider>
//       <div class="row">
//         <div class="col-12 col-sm-6">
//           <div class="row">
//             <label class="contractorFilter col-12">LOCATOR & LINE/SONDE</label>
//             <mat-form-field class="col-12 col-sm-6">
//               <mat-label>Locator mode</mat-label>
//               <mat-select formControlName="locatorMode" (selectionChange)="selectRestrictionValue($event)">
//                 <mat-option *ngFor="let modeL of modesLocator" [value]="modeL.value">
//                   {{modeL.text}}
//                 </mat-option>
//               </mat-select>
//               <mat-error *ngIf="activityForm.controls['locatorMode']?.invalid">
//                 {{getErrorMessage('locatorMode')}}</mat-error>
//             </mat-form-field>
//             <div class="col-12 col-sm-6">
//               <label id="example-radio-group-label" class="contractor"
//                 [ngClass]="activityForm.controls['lineSonde']?.disabled ? '' : 'noGris'">Line/Sonde</label>
//               <mat-radio-group aria-labelledby="example-radio-group-label" class="d-block" formControlName="lineSonde">
//                 <mat-radio-button value="0">Line</mat-radio-button>
//                 <mat-radio-button value="1" class="selectNo">Sonde</mat-radio-button>
//               </mat-radio-group>
//               <mat-error *ngIf="activityForm.controls['lineSonde']?.invalid">
//                 {{getErrorMessage('lineSonde')}}</mat-error>
//             </div>
//             <mat-form-field class="col-12">
//               <mat-label>Antenna mode</mat-label>
//               <mat-select formControlName="antennaMode">
//                 <mat-option *ngFor="let modeA of activity.modesAntenna" [value]="modeA.value">
//                   {{modeA.text}}
//                 </mat-option>
//               </mat-select>
//               <mat-error *ngIf="activityForm.controls['antennaMode']?.invalid">
//                 {{getErrorMessage('antennaMode')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//         <div class="col-12 col-sm-6">
//           <div class="row">
//             <label class="contractorFilter col-12">FREQUENCY</label>
//             <mat-form-field class="col-12"
//               [ngClass]="activity.frequencyLowActive || activity.frequencyLowActive2?'d-none':null">
//               <mat-label>Frequency Low (Hz)</mat-label>
//               <mat-select formControlName="frequencyLow">
//                 <mat-option *ngFor="let modeA of activity.modesfrequency" [value]="modeA.value">
//                   {{modeA.text}}
//                 </mat-option>
//               </mat-select>
//               <mat-error *ngIf="activityForm.controls['frequencyLow']?.invalid">
//                 {{getErrorMessage('frequencyLow')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-12" *ngIf="activity.frequencyLowActive || activity.frequencyLowActive2"
//               [ngClass]="activity.frequencyLowActive || activity.frequencyLowActive2?'col-sm-12':null">
//               <input matInput placeholder="Frequency Low (Hz)" #lowLimitFre formControlName="frequencyLowAdapt"
//                 type="number" min="{{inputMinFrequency}}" max="{{inputMaxFrequency}}" appInputRestriction="integer">
//               <mat-error *ngIf="activityForm.controls['frequencyLowAdapt']?.invalid">
//                 {{getErrorMessage('frequencyLowAdapt')}}</mat-error>
//               </mat-form-field>
//             <!--  -->
//             <mat-form-field class="col-12"
//               [ngClass]="activity.frequencyHighActive || activity.frequencyHighActive2?'d-none':null">
//               <mat-label>Frequency High (Hz)</mat-label>
//               <mat-select formControlName="frequencyHigh">
                
//                 <mat-option *ngFor="let modeA of activity.modesfrequency" [value]="modeA.value">
//                   {{modeA.text}}
//                 </mat-option>
//               </mat-select>
//               <mat-error *ngIf="activityForm.controls['frequencyHigh']?.invalid">
//                 {{getErrorMessage('frequencyHigh')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-12" *ngIf="activity.frequencyHighActive || activity.frequencyHighActive2"
//               [ngClass]="activity.frequencyLowActive || activity.frequencyLowActive2?'':null">
//               <input matInput placeholder="Frequency High (Hz)" #lowLimitFre formControlName="frequencyHighAdapt"
//                 type="number" min="{{inputMinFrequency}}" max="{{inputMaxFrequency}}" appInputRestriction="integer">
//               <mat-error *ngIf="activityForm.controls['frequencyHighAdapt']?.invalid">
//                 {{getErrorMessage('frequencyHighAdapt')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//       </div>
//     </fieldset>
//     <fieldset class="col-12">
//       <div class="row">
//         <div class="col-12">
//           <h3 class="titleRag">Scoring Parameters</h3>
//         </div>
//       </div>
//       <mat-divider class="dividerFilter"></mat-divider>
//       <div class="row">
//         <div class="col-12">
//           <mat-slide-toggle formControlName="stateOverload" class="contractorFilter" [labelPosition]="'before'">
//             ACTIVITY DURATION
//           </mat-slide-toggle>
//         </div>
//         <div class="col-12 col-sm-6" *ngIf="activityForm.get('stateOverload').value">
//           <label class="contractorFilter">Lower Limit</label>
//           <div class="row">
//             <mat-form-field class="col-6">
//               <input matInput placeholder="Minutes" formControlName="lowerMin" type="number" min="0" max="59"
//                 appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['lowerMin']?.invalid">
//                 {{getErrorMessage('lowerMin')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-6">
//               <input matInput placeholder="Seconds" formControlName="lowerMax" type="number" min="0" max="59"
//                 appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['lowerMax']?.invalid">
//                 {{getErrorMessage('lowerMax')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//         <div class="col-12 col-sm-6" *ngIf="activityForm.get('stateOverload').value">
//           <label class="contractorFilter">Upper Limit</label>
//           <div class="row">
//             <mat-form-field class="col-6">
//               <input matInput placeholder="Minutes" formControlName="upperMin" type="number" min="0" max="59"
//                 appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['upperMin']?.invalid">
//                 {{getErrorMessage('upperMin')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-6">
//               <input matInput placeholder="Seconds" formControlName="upperMax" type="number" min="0" max="59"
//                 appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['upperMax']?.invalid">
//                 {{getErrorMessage('upperMax')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//       </div>
//     </fieldset>
//     <fieldset class="col-12">
//       <div class="row">
//         <div class="col-12">
//           <h3 class="titleRag">GAIN & SIGNAL STRENGTH</h3>
//         </div>
//       </div>
//       <mat-divider class="dividerFilter"></mat-divider>
//       <div class="row">
//         <div class="col-12 col-sm-6">
//           <div class="row">
//             <label class="contractorFilter col-12">Gain</label>
//             <mat-form-field class="col-12 col-sm-6 ">
//               <input matInput placeholder="Gain Minimum" formControlName="gainLow" type="number" min="0"
//                 max="{{inputGainMax}}" appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['gainLow']?.invalid">
//                 {{getErrorMessage('gainLow')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-12 col-sm-6">
//               <input matInput placeholder="Gain Maximum" formControlName="gainHigh" type="number" min="0"
//                 max="{{inputGainMax}}" appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['gainHigh']?.invalid">
//                 {{getErrorMessage('gainHigh')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>

//         <div class="col-12 col-sm-6">
//           <div class="row">
//             <label class="contractorFilter col-12">Signal Strength Duration</label>
//             <mat-form-field class="col-12 col-sm-6">
//               <input matInput placeholder="Min (Seconds)" formControlName="signalMin" type="number" min="0" max="3600"
//                 appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['signalMin']?.invalid">
//                 {{getErrorMessage('signalMin')}}</mat-error>
//             </mat-form-field>
//             <mat-form-field class="col-12 col-sm-6">
//               <input matInput placeholder="Target (Seconds)" formControlName="signalMax" type="number" min="0"
//                 max="3600" appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['signalMax']?.invalid">
//                 {{getErrorMessage('signalMax')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//         <div class="col-12 col-sm-6 offset-sm-6">
//           <div class="row">
//             <label class="contractorFilter col-12">Signal Strength Threshold</label>
//             <mat-form-field class="col-12">
//               <input matInput placeholder="Minimum Signal (%)" formControlName="signalMinStrength" type="number" min="0"
//                 max="100" appInputRestriction="integer" autocomplete="off" (keypress)="numberOnly($event)">
//               <mat-error *ngIf="activityForm.controls['signalMinStrength']?.invalid">
//                 {{getErrorMessage('signalMinStrength')}}</mat-error>
//             </mat-form-field>
//           </div>
//         </div>
//       </div>
//     </fieldset>
//     <div class="col-12 text-right mb-2 justify-content-center align-items-center">
//       <button *ngIf="!activityForm.valid && currentUser.roles[0].value == 'DistrictManager'" type="button"
//         title="show fields with errors" class="d-inline-flex btn-transparent"><i (click)="showErrors()"
//           style="color:#0084d5;cursor: pointer;" class="material-icons">
//           notification_important
//         </i></button>
//       <button type="button" class="btnCancel ml-2 d-none d-inline-block"
//         (click)="cancelActivityFunction($event)">CANCEL</button>
//       <button type="button" *ngIf="currentUser.roles[0].value == 'DistrictManager'" (click)="deleteActivityfunction()"
//         class="btnDeleteActivity2 ml-2 d-inline-block">DELETE ACTIVITY</button>
//       <button class="btnAddUser d-inline-block ml-2" type="submit"
//         *ngIf="currentUser.roles[0].value == 'DistrictManager'" [disabled]="!activityForm.valid">SAVE
//         CHANGES</button>
//     </div>
//   </form>
// </div>