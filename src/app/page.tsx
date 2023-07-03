import AboutCourse from "@/components/AboutCourse"
import Copy from "@/components/Copy"
import DetailsCourse from "@/components/DetailsCourse"
import Header from "@/components/Header"
import Teacher from "@/components/Teacher"

export default function Home() {
  return (
    <>
      <Header />
      <AboutCourse />
      <DetailsCourse />
      <Teacher />
      <Copy />
    </>
  )
}
