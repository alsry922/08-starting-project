import { Pipe, PipeTransform } from '@angular/core';

// 순수 파이프는 변경 감지 사이클에서도 입력값이 변경된 경우에만 파이프가 다시 실행된다.
// 비순수 파이프는 입력값 변경과 상관없이 모든 변경감지 사이클에서 다시 실행된다.
@Pipe({
  name: 'sort',
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'desc') {
    const sorted = value.map((val) => Number(val));
    sorted.sort((a, b) => {
      return direction === 'asc' ? (a - b) : (b - a);
    });
    return sorted;
  }
}
