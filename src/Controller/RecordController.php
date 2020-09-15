<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Record;
use App\Repository\RecordRepository;
use Symfony\Component\HttpFoundation\Request;

class RecordController extends AbstractController
{
    private $repository;

    public function __construct(RecordRepository $repository)
    {
        $this->repository = $repository;
    }
    public function index()
    {
        $results = $this->repository->findAll();
        return $this->render('record/index.html.twig', [
            'results' => $results
        ]);
    }
    public function new(Request $request)
    {
        $form_data = $request->request->all();
        $record = new Record();
        $record->setUsername($form_data['nickname']);
        $record->setRightAnswers($form_data['right_answers']);
        $record->setTotalQuestions($form_data['total_questions']);
        $record->setDate();
        $em = $this->getDoctrine()->getManager();
        $em->persist($record);
        $em->flush();

        return $this->redirectToRoute('records');
    }
}
