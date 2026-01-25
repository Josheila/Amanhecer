import Link from 'next/link';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Image src={avatar} alt="Avatar" width={150} height={150} />
      <h1>Sheila</h1>

      <nav style={{ marginTop: '30px' }}>
        <Link href="/now"><a style={{ margin: '0 15px' }}>Now</a></Link>
        <Link href="/posts"><a style={{ margin: '0 15px' }}>Posts</a></Link>
        <Link href="/about"><a style={{ margin: '0 15px' }}>About Me</a></Link>
      </nav>
    </div>
  );
}