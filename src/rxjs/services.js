import { Subject } from 'rxjs';

const subjectLoading = new Subject();

export const loadingService = {
  showLoading: () => subjectLoading.next(true),
  hideLoading: () => subjectLoading.next(false),
  getLoading: () => subjectLoading.asObservable()
}