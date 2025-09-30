export class ModalRef {
  constructor(private closeFn: () => void) {}

  close(): void {
    this.closeFn();
  }
}
