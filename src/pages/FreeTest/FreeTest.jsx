import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const FreeTest = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const answerInputRef = useRef(null);
    const [indexNumber, setIndexNum] = useState(-1)
    const [totalData, setTotalData] = useState([])
    const [table, setTable] = useState(false)
    //  const [allData,setAlldata]=useState([])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // const questions = [
    //     'When I go to a party, I spend much of the time huddled with friends near the food/drinks',
    //     'After a long or challenging day, I make a beeline to the kitchen or a restaurant. ',
    //     'I keep snacks/treats stored in a special place.',
    //     'I am already scheduling the next great meal',
    //     'I finish what is on my plate because it would be a waste not to.',
    //     'I order/prepare extra because it might be needed.',
    //     'When I get bad news or am upset, a little of my favorite food can help take the edge off.',
    //     'Meeting with a friend/family seems boring if food is not involved.',
    //     'Something sweet is a perfect way to end a meal. ',
    //     'There are certain dishes I love to eat as they remind me of my mom/dad/(other). ',
    //     'Most events I attend involve eating and drinking.',
    //     'I work hard and deserve a treat and a little “me time” with a favorite food',
    //     'After completing a project/event, food can serve as a good reward. ',
    //     'I might stand out or offend someone if I don’t join in eating/drinking when others are.',
    //     'There are some foods that I see or smell and just need to have it all. ',
    //     'I find myself searching the kitchen to find the perfect bite to satisfy a craving. ',
    // ];
    const questions = [
        {
            id: 1,
            name: 'When I go to a party, I spend much of the time huddled with friends near the food/drinks'
        },
        {
            id: 2,
            name: 'After a long or challenging day, I make a beeline to the kitchen or a restaurant. '
        },
        {
            id: 3,
            name: 'I keep snacks/treats stored in a special place.'
        },
        {
            id: 4,
            name: 'I am already scheduling the next great meal'
        },
        {
            id: 5,
            name: 'I finish what is on my plate because it would be a waste not to.'
        },
        {
            id: 6,
            name: 'I order/prepare extra because it might be needed.'
        },
        {
            id: 7,
            name: 'When I get bad news or am upset, a little of my favorite food can help take the edge off.'
        },
        {
            id: 8,
            name: 'Meeting with a friend/family seems boring if food is not involved.',
        },
        {
            id: 9,
            name: 'Something sweet is a perfect way to end a meal. '
        },
        {
            id: 10,
            name: 'There are certain dishes I love to eat as they remind me of my mom/dad/(other). '
        },
        {
            id: 11,
            name: 'Most events I attend involve eating and drinking.'
        },
        {
            id: 12,
            name: 'I work hard and deserve a treat and a little “me time” with a favorite food'
        },
        {
            id: 13,
            name: 'After completing a project/event, food can serve as a good reward. '
        },
        {
            id: 14,
            name: 'I might stand out or offend someone if I don’t join in eating/drinking when others are.'
        },
        {
            id: 15,
            name: 'There are some foods that I see or smell and just need to have it all. '
        },
        {
            id: 16,
            name: 'I find myself searching the kitchen to find the perfect bite to satisfy a craving. '
        }
    ];

    const questionsPerPage = 4;





    const handleAnswer = (number) => {
        setIndexNum(-1)

        if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }

        if (answerInputRef.current) {
            answerInputRef.current.value = '';
        }

        window.scrollTo({ top: 100, left: 0, behavior: 'smooth' });

    };

    useEffect(() => {
        if (answerInputRef.current) {
            answerInputRef.current.focus();
        }
    }, [currentPage]);



    const startQuestionIndex = currentPage * questionsPerPage;
    const endQuestionIndex = startQuestionIndex + questionsPerPage

    const element = document.getElementById(indexNumber + 1);

    const [aaa, setaaa] = useState('')
    const QuestionHandler = (index, question) => {
        console.log(index)
        setIndexNum(index)


        element?.scrollIntoView({ behavior: 'smooth' });

        // console.log(question)
        // setaaa(question)



    }

    // const [ex,setEx]=useState(0)
    const onSubmit = (data) => {
        console.log(data)

        const allData = [
            {
                Name: data.questionsName1,
                Score: data.question1
            },
            {
                Name: data.questionsName2,
                Score: data.question2
            },
            {
                Name: data.questionsName3,
                Score: data.question3
            },
            {
                Name: data.questionsName4,
                Score: data.question4
            },
            {
                Name: data.questionsName5,
                Score: data.question5
            },
            {
                Name: data.questionsName6,
                Score: data.question6
            },
            {
                Name: data.questionsName7,
                Score: data.question7
            },
            {
                Name: data.questionsName8,
                Score: data.question8
            },
            {
                Name: data.questionsName9,
                Score: data.question9
            },
            {
                Name: data.questionsName10,
                Score: data.question10
            },
            {
                Name: data.questionsName11,
                Score: data.question11
            },
            {
                Name: data.questionsName12,
                Score: data.question12
            },
            {
                Name: data.questionsName13,
                Score: data.question13
            },
            {
                Name: data.questionsName14,
                Score: data.question14
            },
            {
                Name: data.questionsName15,
                Score: data.question15
            },
            {
                Name: data.questionsName16,
                Score: data.question16
            },
        ];
        console.log(allData)
        // fetch("http://localhost:5000/test",{
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(allData)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data.insertedIds){
        //         Swal.fire({
        //             position: "top-center",
        //             icon: "success",
        //             title: "Your work has been saved",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });



        //     }
        // })
        setTable(true)
        setTotalData(allData);

    }

    // useEffect(()=>{
    //     fetch("http://localhost:5000/test")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setTotalData(data)})
    // })

    console.log(totalData)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <section>
            <div className=''>
                <div>
                    <div className='bg-[#33A474] py-14 md:relative'>
                        <h1 className='text-5xl font-bold text-white text-center '>Free Personality Test</h1>
                        <p className='text-white text-center mt-4 text-lg font-semibold'>NERIS Type Explorer®</p>
                    </div>
                    <div className="custom-shape-divider-bottom-1699756183 ">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill fill-[#33A474]"></path>
                        </svg>
                    </div>
                </div>
                {/* cards */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mx-20 mx-auto md:absolute md:top-64'>
                    <div className="card w-96 glass mx-2 mt-2">
                        <figure><img className='w-20 mt-5' src="https://www.16personalities.com/static/images/test-header-2.svg" alt="car!" /></figure>
                        <div className="card-body text-center">
                            <h2 className=" text-center text-2xl font-bold">Complete the Test</h2>
                            <p>Be yourself and answer honestly to find out your personality type.</p>

                        </div>
                    </div>
                    <div className="card w-96 glass mx-2 mt-2">
                        <figure><img className='w-20 mt-5' src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg" alt="car!" /></figure>
                        <div className="card-body text-center">
                            <h2 className=" text-center text-2xl font-bold">View Detailed Results</h2>
                            <p>Learn how your personality type influences many areas of your life.</p>

                        </div>
                    </div>
                    <div className="card w-96 glass mx-2 mt-2">
                        <figure><img className='w-20 mt-5' src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg" alt="car!" /></figure>
                        <div className="card-body text-center">
                            <h2 className=" text-center text-2xl font-bold">Unlock Your Potential</h2>
                            <p>Grow into the person you want to be with your optional Premium Suite.</p>

                        </div>
                    </div>
                </div>





            </div>
            {/* questions */}

            <div className='mt-52'>


                <form onSubmit={handleSubmit(onSubmit)} action="">
                    {questions.slice(startQuestionIndex, endQuestionIndex).map((question, index) => (
                        <div key={index} className={`${index} `}>
                            <p className='mt-5 text-center text-xl font-bold text-[#576071]'>{question.name}</p>
                            <input {...register(`questionsName${question.id}`)} name='questions' type="text" className='hidden' defaultValue={question.name} />
                            <div onClick={() => QuestionHandler(index, question)} className={`${index == indexNumber + 1 ? "static" : "opacity-30"} `}>
                                <div className='flex justify-center items-center gap-10 mt-5'>
                                    <h1 className='text-xl font-bold md:block hidden text-green-600'>Agree</h1>
                                    <input {...register(`question${question.id}`)} type="radio" value={4} name={`question${question.id}`} className="radio radio-success h-16 w-16 border-2 " />
                                    <input {...register(`question${question.id}`)} type="radio" value={3} name={`question${question.id}`} className="radio radio-success h-12 w-12 " />
                                    <input {...register(`question${question.id}`)} type="radio" value={2} name={`question${question.id}`} className="radio radio-[#88619A] radio-lg  border-2" />
                                    <input {...register(`question${question.id}`)} type="radio" value={1} name={`question${question.id}`} className="radio radio-primary h-12 w-12 border-2 " />
                                    <input {...register(`question${question.id}`)} type="radio" value="0" name={`question${question.id}`} className="radio radio-primary h-16 w-16 border-2 " />
                                    <h1 className='text-xl font-bold md:block hidden text-[#570DF8]'>Disagree</h1>
                                </div>

                            </div>


                            <hr className='mt-10' />
                        </div>
                    ))}
                    <div className='flex justify-center  mb-20 mt-10 items-center'>
                        <button className={`${currentPage == 3 ? "" : "hidden"} px-16 text-4xl text-white bg-[#88619A] flex items-center gap-4 rounded-full text-center py-2`} >See Result <FaArrowRight /></button>
                    </div>


                </form>
                <div className='flex justify-center  mb-20 mt-10 items-center'>
                    <button className={`${currentPage == 3 ? "hidden" : ""} px-16 text-4xl text-white bg-[#88619A] flex items-center gap-4 rounded-full text-center py-2`} onClick={handleAnswer}>Next <FaArrowRight /></button>
                </div>

            </div>

            {
                table === true ? <div>
                    <table className='border p-10 mx-auto'>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>

                        {
                            totalData.map(t => <tr key={1}>
                                <th className='text-start border'>{t.Name}</th>
                                <th className='border'>{t.Score}</th>
                            </tr>)
                        }

                    </table>
                </div> : <></>
            }

        </section>
    );
};

export default FreeTest;