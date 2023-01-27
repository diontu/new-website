import FadeIn from '../../components/transitions/FadeIn';
import LayoutOne from '../../layouts/layoutone/LayoutOne';

export default function Contact(): JSX.Element {
  return (
    <LayoutOne
      title="...Contact"
      titleAlign="right"
      subtitle="Get in touch with me!"
    >
      <FadeIn>
        <p>
          You can reach me at diontu1@gmail.com and I will get back to you in
          3-5 business days.
        </p>
      </FadeIn>
    </LayoutOne>
  );
}
