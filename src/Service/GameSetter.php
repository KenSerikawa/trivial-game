<?php 

declare(strict_types=1);

namespace App\Service;

final class GameSetter 
{
    private $questions;
    private $category;
    private $difficulty;
    private $type;

    public function __construct(string $questions='10', string $category='', string $difficulty='', string $type='')
    {
        $this->questions = $questions;
        $this->category = $category;
        $this->difficulty = $difficulty;
        $this->type = $type;
    }

    public function __invoke()
    {  
        $url = 'https://opentdb.com/api.php?' . $this->urlBuilder();

        return json_decode(file_get_contents($url), true);
    }

    public function urlBuilder($params = [])
    {
        $questions = $this->ifIsNotAny('amount', $this->questions);
        $category = $this->ifIsNotAny('category', $this->category);
        $difficulty = $this->ifIsNotAny('difficulty', $this->difficulty);
        $type = $this->ifIsNotAny('type', $this->type);
        $url = http_build_query($questions);
        $url .= $this->addParameterIfNotEmpty($category);
        $url .= $this->addParameterIfNotEmpty($difficulty);
        $url .= $this->addParameterIfNotEmpty($type);

        return $url; 
    }

    public function addParameterIfNotEmpty($parameter)
    {
        if(!empty($parameter)) {
            return "&" . http_build_query($parameter);
        } 
    }

    public function ifIsNotAny(string $key, string $option, array $arr=[])
    {
        if($option == 'any') {
            return  '';
        }
        $arr = [$key => $option];
        return $arr;
    }

}
