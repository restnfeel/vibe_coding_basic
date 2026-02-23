import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const stats = [
  { number: '0줄',  label: '사전 코딩 경험 불필요' },
  { number: '1일',  label: '첫 앱 완성 목표' },
  { number: '6개',  label: '단계별 챕터' },
  { number: '100%', label: '따라하기 가능한 난이도' },
];

const features = [
  {
    icon: '🤖',
    title: '바이브 코딩이란?',
    desc: '코드를 직접 타이핑하는 대신 AI에게 설명하면 AI가 코드를 만들어줍니다. 왜 지금 배워야 하는지부터 시작합니다.',
  },
  {
    icon: '🛠️',
    title: 'Cursor 설치 & 첫 실행',
    desc: '가장 많이 쓰이는 AI 코딩 도구 Cursor를 설치하고, 처음으로 AI와 대화하는 것까지 단계별로 함께합니다.',
  },
  {
    icon: '🚀',
    title: '첫 프로젝트 완성하기',
    desc: 'AI와 함께 간단한 To-Do 앱을 처음부터 끝까지 만들어봅니다. 코딩 경험이 없어도 따라올 수 있습니다.',
  },
  {
    icon: '💬',
    title: '프롬프트 잘 쓰는 법',
    desc: 'AI가 잘 이해하는 방식으로 설명하는 법을 배웁니다. 애매하게 물어보면 결과도 애매해지거든요.',
  },
  {
    icon: '🔁',
    title: '나만의 개발 루틴',
    desc: '매일 AI와 함께 코딩하는 습관을 만드는 방법입니다. 루틴이 생기면 실력은 자연스럽게 따라옵니다.',
  },
  {
    icon: '📈',
    title: '다음 단계로 나아가기',
    desc: '베이직을 마쳤다면 이제 효율화 가이드로 넘어갈 차례입니다. 비용·속도·품질을 동시에 잡는 전략이 기다립니다.',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="코딩 경험 없이도 AI와 함께 첫 앱을 완성하는 입문 가이드 — 디지로그랩스">

      {/* Hero */}
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.badge}>DIGILOG LABS × AI Coding 입문</div>
          <h1 className={styles.heroTitle}>
            코딩 몰라도 괜찮아요<br />AI와 함께라면 됩니다
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleStrong}>바이브 코딩</span>은 AI에게 설명하면 AI가 코드를 만드는 새로운 개발 방식입니다.
          </p>
          <p className={styles.heroSubtitle}>
            어렵게 생각하지 마세요.<br />
            이 가이드는 처음 시작하는 분들을 위해 아주 천천히, 함께 걸어갑니다.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.btnPrimary} to="/intro">
              지금 시작하기 →
            </Link>
            <Link className={styles.btnSecondary} to="/first-project">
              첫 프로젝트 보기
            </Link>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>무엇을 배우나요?</h2>
          <p className={styles.sectionSubtitle}>
            처음 시작하는 분들을 위한 6단계 커리큘럼
          </p>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureTitle}>{f.title}</div>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>첫 걸음이 가장 어렵습니다</h2>
          <p className={styles.ctaDesc}>
            지금 바로 시작해보세요.<br />
            천천히, 하나씩, 함께 만들어가겠습니다.
          </p>
          <div className={styles.buttons}>
            <Link className={styles.btnPrimary} to="/intro">
              가이드 시작하기 →
            </Link>
          </div>
          <p className={styles.ctaFrom}>
            by{' '}
            <a
              className={styles.ctaFromLink}
              href="https://digiloglabs.com"
              target="_blank"
              rel="noopener noreferrer">
              디지로그랩스 주식회사
            </a>
            {' '}— 디지털과 아날로그가 만나는 곳
          </p>
        </div>
      </section>

    </Layout>
  );
}
