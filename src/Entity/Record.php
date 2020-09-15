<?php

namespace App\Entity;

use App\Repository\RecordRepository;
use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RecordRepository::class)
 */
class Record
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $username;

    /**
     * @ORM\Column(type="integer")
     */
    private $right_answers;

    /**
     * @ORM\Column(type="integer")
     */
    private $total_questions;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getRightAnswers(): ?int
    {
        return $this->right_answers;
    }

    public function setRightAnswers(int $right_answers): self
    {
        $this->right_answers = $right_answers;

        return $this;
    }

    public function getTotalQuestions(): ?int
    {
        return $this->total_questions;
    }

    public function setTotalQuestions(int $total_questions): self
    {
        $this->total_questions = $total_questions;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(): self
    {
        $this->date = new DateTime();

        return $this;
    }
}
