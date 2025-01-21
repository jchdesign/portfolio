import { useEffect } from 'react';

function SFParksRec() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>SFParksRec</div>
  )
}

export default SFParksRec