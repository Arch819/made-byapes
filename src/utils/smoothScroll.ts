export const smoothScrollToAnchor = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  callback?: () => void
): void => {
  event.preventDefault();

  const targetId = (event.currentTarget as HTMLAnchorElement)
    .getAttribute('href')
    ?.substring(1);
  const targetElement = document.getElementById(targetId!);

  if (targetElement) {
    const targetOffsetTop = targetElement.offsetTop;

    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth',
    });
    if (callback) {
      callback();
    }
  }
};
