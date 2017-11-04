import {Component} from '@angular/core';
import {TextProcessor} from "./text-processor";

@Component({
  selector: 'ascii-editor',
  templateUrl: './ascii-editor.component.html',
  styleUrls: ['./ascii-editor.component.css']
})
export class AsciiEditorComponent {

  textInput: string = 'Yenearsira tula, hama neva i\'naur amin uuma malia ama tyelka. Amin khiluva lle a\' gurtha ar\' thar Telcoerea tanya farnuva Agaryulnaerea. Naugiaur Tel\'Sindavathar Belegerea lova tyelka. Tua amin! lle maa quel ai\' atar Urime. Peredhil Hodoerea ram en\' templa amin fauka.\n' +
    '\n' +
    'Lle ista amin quella no\' amin rima ten\'ta! Narquelie ro caele beika fion laure sereg. Lle lakwenien maien quel n\'quel mani naa essa en lle ram en\' templa. Tanka tel\' taurnin pelekta yassen runya. \'Ksherea mani naa lle umien? Aa\' menealle nauva calen ar\' malta lova termara en\' templa lle lava manka lle merna. Tel\'Domeduathea ai\' atar Narvinye auta miqula orqu.\n' +
    '\n' +
    'Lle naa vanima amin hiraetha sen Dinaerea. Ram en\' \'kshapsa lle vesta Glamhoth lissenen ar\' maska\'lalaith tenna\' lye omentuva. Parm templa tengwa Mith\'quessir lanta kaima mankoi lle irma sint? Uialtum mankoi lle irma sint pela tanya tempa aiguldur amin nauva auta yeste\'. Amin naa lle nai thanga yassen templa lle naa belegohtar tula uialtum.';
  textOutput: string;
  width: number = 65;

  processTextInput() {
    let processor = new TextProcessor(this.width);
    processor.process(this.textInput);
    this.textOutput = processor.build();
  }

  ngOnInit(): void {
    this.processTextInput();
  }

}
