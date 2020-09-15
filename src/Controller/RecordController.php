<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\RecordRepository;

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
}
