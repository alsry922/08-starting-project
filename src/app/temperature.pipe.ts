import {output, Pipe, PipeTransform} from "@angular/core";


@Pipe({
  // 템플릿에서 이름을 사용해 파이프를 호출한다.
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  // 파이프가 사용된 값, 파이프를 통해 추가한 설정값들
  transform(value: number | string, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): any {
    const val = typeof value === 'string' ? parseFloat(value) : value;

    let outputTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: 'C' | 'F';

    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'cel' ? 'C' : 'F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
