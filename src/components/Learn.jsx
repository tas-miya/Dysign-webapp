import React from 'react'
import { Navbar } from '.'
import { comsym } from '../assets'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons' 

const Learn = () => {
  return (
    <div className='w-screen h-screen'>
        {/* background setup */}
        <div className='h-screen bg-white flex flex-col justify-end absolute md:hidden'>
            <img src={comsym} className='opacity-50'/>
        </div>
        <Navbar />

        <div className='w-full h-full relative flex flex-col sm:flex-wrap px-4 sm:px-8 pt-20 sm:pt-40 text-secondary'>
            <h1 className='font-montserrat font-black text-[28px] md:text-[40px] sm:w-1/3 max-sm:text-center'>More About Learning Difficulties</h1>
            
            {/* index */}
            <div className='w-full sm:w-1/4 h-1/3 flex flex-col max-sm:items-center pt-4 font-roboto text-secondary text-[12px] md:text-[14px] space-y-1'>
                <h2 className='font-bold'>On this page</h2>
                <AnchorLink href="#wid"><p className='text-secondary font-montserrat'>What is Dyslexia?</p></AnchorLink>
                <AnchorLink href='#hfv'><p className='text-secondary font-montserrat'>Helpful Videos</p></AnchorLink>
                <AnchorLink href='#hfw'><p className='text-secondary font-montserrat'>Websites To Learn More About Dyslexia</p></AnchorLink>
                <AnchorLink href='#gpa'><p className='text-secondary font-montserrat'>General Practicing Apps</p></AnchorLink>
                <AnchorLink href='#smha'><p className='text-secondary font-montserrat'>Some More Helpful Apps</p></AnchorLink>
                <AnchorLink href='#gcp'><p className='text-secondary font-montserrat'>Games for Cognition Practice</p></AnchorLink>
                <AnchorLink href='#mp'><p className='text-secondary font-montserrat'>Math Practice</p></AnchorLink>
                
            </div>
            <br/>
            <div className='overflow-y-scroll scrollbar-hide w-full sm:w-4/6 shadow-inner '>
                <div id='wid' className='text-secondary space-y-2'>
                    <h3 className='font-black font-montserrat text-[24px]'>What is Dyslexia?</h3>
                    <p className='font-roboto text-[16px]'>
                    Dyslexia is a LD (Learning Difficulty) that makes it hard to remember what a letter or word looks like and what it sounds like. This means children have trouble reading, writing, and spelling. Since all school work requires reading and writing, the child struggles in every subject.<br/>
                    Dyslexia is not a disease, it is simply a difficulty. It occurs due to many reasons, but the most basic one is that every child is different. The same classroom setting does not work for everyone, and these children can learn very well if we teach them the way they learn 🙂<br/>
                    Early diagnosis is very important to help the child on time. Dyslexia does not go away, and if we don’t help the child, the problem will only get worse. It will also cause the child’s self-confidence to get low, and they can get anxiety. The problem can only be solved by helping the child learn in the way they learn best, with professional help.<br/>
                    Also, official diagnosis can help get extra time on board exams.<br/>
                    To help the child, you may use the test on this website to see if they are showing symptoms. You may also read more about Dyslexia and see FAQs. You may contact professionals and get an expert opinion. You may also help the child with extra help at home using online resources.

                    </p>
                </div>
                <br/>
                <div id='hfv' className='w-full space-y-2 text-secondary'>
                    <h3 className='font-black font-montserrat text-[24px]'>Helpful Videos</h3>
                    <div className='w-full h-16 bg-gray-100 bg-opacity-50 shadow-md flex items-center justify-center text-[16px] text-secondary space-x-3 rounded-2xl cursor-pointer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <a href='https://www.youtube.com/watch?v=11r7CFlK2sc' className='font-roboto font-bold '>See Dyslexia Differently</a>
                    </div>
                    <div className='w-full h-16 bg-gray-100 bg-opacity-50 shadow-md flex items-center justify-center text-[16px] text-secondary space-x-3 rounded-2xl cursor-pointer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <a href='https://www.youtube.com/watch?v=zafiGBrFkRM' className='font-roboto font-bold '>What Is Dyslexia?</a>
                    </div>
                    <div className='w-full h-16 bg-gray-100 bg-opacity-50 shadow-md flex items-center justify-center text-[16px] text-secondary space-x-3 rounded-2xl cursor-pointer'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <a href='https://www.youtube.com/watch?v=kE3DqJP-nkI' className='font-roboto font-bold '>What Is Dyslexia? | Dyslexia Explained</a>
                    </div>

                </div>
                <br/>
                <div id='hfw' className='w-full space-y-2 text-secondary'>
                    <h3 className='font-black font-montserrat text-[24px]'>Websites To Learn More About Dyslexia</h3>
                    <li className='list-disc font-bold'>Understood.org</li>
                    <p>This website offers a wide range of resources for parents of children with learning difficulties, including webinars, videos, and articles on topics like ADHD, dyslexia, and executive functioning.</p>

                    <li className='list-disc font-bold'>LD Online</li>
                    <p>This website offers a variety of free webinars and online courses for parents of children with learning difficulties, covering topics like reading and writing skills, executive functioning, and social skills.</p>

                    <li className='list-disc font-bold'>Learning Disabilities Association of America (LDA):</li>
                    <p>This organization offers free online courses for parents of children with learning difficulties, including courses on understanding LDs, advocacy skills, and communication strategies.</p>

                    <li className='list-disc font-bold'>Reading Rockets</li>
                    <p>This website offers a variety of resources for parents of children with reading difficulties, including online courses on reading strategies and tips for choosing appropriate books.</p>

                    <li className='list-disc font-bold'>Smart Kids with LDs</li>
                    <p>This website offers a variety of resources for parents of children with learning difficulties, including webinars and articles on topics like executive functioning and self-advocacy.</p>
                    
                </div>
                <br/>
                <div id='gpa' className='text-secondary space-y-2'>
                    <h3 className='font-black font-montserrat text-[24px]'>General Practicing Apps</h3>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://play.google.com/store/apps/details?id=org.learningally.LinkMobile&hl=en&gl=US&pli=1' className='text-secondary font-bold'>Learning Ally</a>
                        </span><br/>
                        This app provides audiobooks for students with dyslexia, ADHD, and other learning difficulties, allowing them to access educational material through auditory channels.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://play.google.com/store/search?q=read%26write&c=apps&hl=en&gl=US' className='text-secondary font-bold'>Read&Write</a>
                        </span><br/>
                        Provides support for students with dyslexia, ADHD, and other learning difficulties by helping them with reading, writing, and research skills. It includes features like text-to-speech, speech-to-text, and word prediction.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://play.google.com/store/search?q=khan%20academy%20kids&c=apps&hl=en&gl=US' className='text-secondary font-bold'>Khan Academy Kids</a>
                        </span><br/>
                        It offers a wide range of educational videos and exercises designed to help students with learning difficulties build foundational knowledge in subjects like math, science, and history.
                    </div>
                    <br />
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://www.scholastic.com/parents/school-success/learn-at-home.html' className='text-secondary font-bold'>Scholastic Learn At Home</a>
                        </span><br/>
                        This website provides free daily activities and projects for children in grades PreK-9, making it a great resource for parents who want to keep their children engaged and learning at home.
                    </div>
                </div>
                <br/>
                <div id='smha' className='text-secondary space-y-2'>
                    <h3 className='font-black font-montserrat text-[24px]'>Some More Helpful Apps</h3>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://play.google.com/store/search?q=my+study+life+-+school+planner&c=apps&hl=en&gl=US' className='text-secondary font-bold'>MyStudyLife</a>
                        </span>
                        <p className='font-bold text-[12px]'>Planning and Organization</p>
                        This app helps students with ADHD and other learning difficulties stay organized by providing a personalized planner that includes class schedules, assignments, and reminders.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://chrome.google.com/webstore/detail/cowriter/ifajfiofeifbbhbionejdliodenmecna?hl=en' className='text-secondary font-bold'>Co:Writer</a>
                        </span>
                        <p className='font-bold text-[12px]'>Writing Help</p>
                        
                        It provides support for students with dyslexia, ADHD, and other learning difficulties by helping them with writing skills. It includes features like word prediction and context-based suggestions to help students express their ideas more effectively.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://www.voicedream.com/' className='text-secondary font-bold'>Voice Dream Reader</a>
                        </span>
                        <p className='font-bold text-[12px]'>Reading Help</p>
                        This app provides audiobooks for students with dyslexia, ADHD, and other learning difficulties, allowing them to access educational material through auditory channels.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://www.readworks.org/' className='text-secondary font-bold'>ReadWorks</a>
                        </span>
                        <p className='font-bold text-[12px]'>Reading Help</p>
                        This website provides free reading comprehension lessons and materials for students in grades K-12, making it a great resource for parents who want to help their children improve their reading skills.
                    </div>
                </div>
                <br/>
                <div id='gcp' className='text-secondary space-y-2'>
                    <h3 className='font-black font-montserrat text-[24px]'>Games for Cognition Practice</h3>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://play.google.com/store/apps/details?id=com.cognifit.app&hl=en&gl=US' className='text-secondary font-bold'>CogniFit</a>
                        </span><br/>
                        This app offers brain training games designed to help students with learning difficulties improve cognitive skills like memory, attention, and processing speed.
                    </div>
                    <br/>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://www.funbrain.com/' className='text-secondary font-bold'>Funbrain</a>
                        </span><br/>
                        This website offers free educational games and activities for children in grades K-8, making it a great resource for parents who want to help their children improve their math and reading skills.
                    </div>
                    <br/>
                </div>
                <div id='mp' className='text-secondary space-y-2'>
                    <h3 className='font-black font-montserrat text-[24px]'>Math Practice</h3>
                    <div>
                        <span className='space-x-2'>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            <a href='https://www.mathplayground.com/' className='text-secondary font-bold'>Math Playground</a>
                        </span>
                        <br/>
                        This website offers free math games, puzzles, and activities for children in grades 1-6, making it a great resource for parents who want to help their children improve their math skills.
                    </div>
                    <br/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Learn