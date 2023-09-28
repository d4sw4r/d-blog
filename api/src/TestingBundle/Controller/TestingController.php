<?php

namespace TestingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use ApiBundle\Entity\Post;
use ApiBundle\Entity\Tag;

class TestingController extends Controller
{
    /**
     * @Route("/index")
     * @Template()
     */
    public function indexAction()
    {
        $post = $this->getDoctrine()
        ->getRepository('ApiBundle:Post')
        ->findAll();

    $TagName = $post->getTag()->getName();
        dump($post);
        dump($TagName);
        return array(
                // ...
            );    }

    /**
     * @Route("/index/{id}")
     * @Template()
     */
    public function listAction($id)
    {
        $post = $this->getDoctrine()
        ->getRepository('ApiBundle:Post')
        ->find($id);

    $TagName = $post->getTag()->getName();
        dump($post);
        dump($TagName);
        return array(
                // ...
            );    }    

    /**
     * @Route("/new/{title}")
     * @Template()
     */
    public function newAction($title)
    {
    	 $tag = new Tag();
        $tag->setName('webserver');

        $post = new Post();
        $post->setTitle($title);
        $post->setAuthor('Thane');
        $post->setContent('Lorem ipsum dolor');
        $post->setTag($tag);

        $em = $this->getDoctrine()->getManager();
        $em->persist($tag);
        $em->persist($post);
        $em->flush();
        return array(
                // ...
            );    }

}