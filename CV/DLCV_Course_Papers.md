# Deep Learning for Computer Vision - Course Papers

Complete paper reading list from Columbia University's Deep Learning for Computer Vision course.

## 📚 Table of Contents

- [1. Introduction to Deep Learning](#1-introduction-to-deep-learning)
- [2. Convolutional Neural Networks](#2-convolutional-neural-networks-cnns)
- [3. Object Detection and Segmentation](#3-object-detection-and-segmentation)
- [4. Self-Supervised Learning](#4-self-supervised-learning)
- [5. RNN / Sequence-to-Sequence Model](#5-rnn--sequence-to-sequence-model)
- [6. Pre-trained Language Modeling](#6-pre-trained-language-modeling)
- [7. Efficient Fine-Tuning Techniques](#7-efficient-fine-tuning-techniques-in-large-language-models)
- [8. Unlocking LLM Capabilities](#8-unlocking-the-capabilities-of-language-models)
- [9. Vision Transformer](#9-vision-transformer)
- [10. 3D Vision & Denoising Diffusion](#10-3d-vision--denoising-diffusion)
- [11. Application of Language Modeling](#11-application-of-language-modeling)
- [12. Vision-Language Learning](#12-vision-language-learning)
- [13. Reinforcement Learning](#13-reinforcement-learning)
- [14. Deep Generative Model and Applications](#14-deep-generative-model-and-applications)
- [15. Speech Recognition](#15-speech-recognition)
- [16. Deep Learning Optimization](#16-deep-learning-optimization-and-more)
- [17. Deep Transfer Learning](#17-deep-transfer-learning--lifelong-learning)
- [18. One Shot Deep Learning](#18-one-shot-deep-learning)
- [19. Neural Turing Machine](#19-neural-turing-machine)

---

## 1 Introduction to Deep Learning

### Course "Text Book"
**[1.0]** Bengio, Yoshua, Ian J. Goodfellow, and Aaron Courville. "Deep learning." An MIT Press book. (2015). [📄 pdf](https://www.deeplearningbook.org/)

### High-level Survey
**[1.1]** LeCun, Yann, Yoshua Bengio, and Geoffrey Hinton. "Deep learning." Nature 521.7553 (2015): 436-444. [📄 pdf](https://www.nature.com/articles/nature14539)

---

## 2 Convolutional Neural Networks (CNNs)
*Date: Jan 29, 2025*

### LeNet: Image Classification on Handwritten Digits
**[2.0]** Y. LeCun, L. Bottou, Y. Bengio and P. Haffner. "Gradient-Based Learning Applied to Document Recognition." Proceedings of the IEEE, 86(11):2278-2324. 1998. [📄 pdf](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf) (Seminal Paper: LeNet) [SM]

### Image Classification on ImageNet
**[2.1]** Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton. "Imagenet classification with deep convolutional neural networks." Advances in neural information processing systems. 2012. [📄 pdf](https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf) (AlexNet) [SM]

**[2.2]** Simonyan, Karen, and Andrew Zisserman. "Very deep convolutional networks for large-scale image recognition." arXiv preprint arXiv:1409.1556 (2014). [📄 pdf](https://arxiv.org/pdf/1409.1556.pdf) (VGG Network) [EAW]

**[2.3]** Szegedy, Christian, et al. "Going deeper with convolutions." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2015. [📄 pdf](https://arxiv.org/pdf/1409.4842.pdf) (GoogleNet/Inception)

**[2.4]** He, Kaiming, et al. "Deep residual learning for image recognition." arXiv preprint arXiv:1512.03385 (2015) [📄 pdf](https://arxiv.org/pdf/1512.03385.pdf) (ResNet) [HG]

**[2.5]** Huang, G. et al. "Densely Connected Convolutional Networks." arXiv preprint arXiv:1608.06993 (2017) [📄 pdf](https://arxiv.org/pdf/1608.06993.pdf) (DenseNet) [HG]

**[2.6]** Hu, Jie et al. "Squeeze-and-Excitation Networks." arXiv preprint arXiv:1709.01507 (2017) [📄 pdf](https://arxiv.org/pdf/1709.01507.pdf)

**[2.7]** Howard, A. G. et al. "MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications." [📄 pdf](https://arxiv.org/pdf/1704.04861.pdf)

**[2.8]** Tan, M. and Le, Q. V. "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks." [📄 pdf](https://arxiv.org/pdf/1905.11946.pdf)

**[2.9]** Xie, Q. et al. "Self-training with Noisy Student improves ImageNet classification." [📄 pdf](https://arxiv.org/pdf/1911.04252.pdf) [YH]

**[2.10]** Bojarski, M. et al. "End to End Learning for Self-Driving Cars." [📄 pdf](https://arxiv.org/pdf/1604.07316.pdf)

**[2.11]** Liu, Z. et. al. "A ConvNet for the 2020s." [📄 pdf](https://arxiv.org/pdf/2201.03545.pdf) [EAW]

**[2.12]** Tan, M. et. al. "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks." [📄 pdf](https://arxiv.org/pdf/1905.11946.pdf)

**[2.13]** Tan, M. et. al. "EfficientNetV2: Smaller Models and Faster Training." [📄 pdf](https://arxiv.org/pdf/2104.00298.pdf)

**[2.14]** O. Ronnenberger et al. "U-Net: Convolutional Networks for Biomedical Image Segmentation." 2015. [📄 pdf](https://arxiv.org/pdf/1505.04597.pdf) [YH]

---

## 3 Object Detection and Segmentation
*Date: Feb 5, 2025*

### Detection

**[3.0]** H. A. Rowley, S. Baluja, and T. Kanade, "Neural network-based face detection," Proc. IEEE Comput. Soc. Conf. Comput. Vis. Pattern Recognition, pp. 203–208, 1996. [📄 pdf](https://ieeexplore.ieee.org/document/517044)

**[3.1]** P. Viola and M. Jones, "Rapid object detection using a boosted cascade of simple features," in Proceedings of the 2001 IEEE Computer Society Conference on Computer Vision and Pattern Recognition. [📄 pdf](https://www.cs.cmu.edu/~efros/courses/LBMV07/Papers/viola-cvpr-01.pdf)

**[3.2]** Szegedy, Christian, Alexander Toshev, and Dumitru Erhan. "Deep neural networks for object detection." Advances in Neural Information Processing Systems. 2013. [📄 pdf](https://papers.nips.cc/paper/5207-deep-neural-networks-for-object-detection.pdf)

**[3.2b]** Sermanet, Eigen, Zhang, Mathieu, Fergus, and LeCun, "OverFeat: Integrated Recognition, Localization and Detection using Convolutional Networks," 2014. [📄 pdf](https://arxiv.org/pdf/1312.6229.pdf)

**[3.3]** Girshick, Ross, et al. "Rich feature hierarchies for accurate object detection and semantic segmentation." Proceedings of the IEEE conference on computer vision and pattern recognition. 2014. [📄 pdf](https://arxiv.org/pdf/1311.2524.pdf) (R-CNN)

**[3.4]** He, Kaiming, et al. "Spatial pyramid pooling in deep convolutional networks for visual recognition." European Conference on Computer Vision. Springer International Publishing, 2014. [📄 pdf](https://arxiv.org/pdf/1406.4729.pdf) (SPPNet)

**[3.5]** Girshick, Ross. "Fast R-CNN." Proceedings of the IEEE International Conference on Computer Vision. 2015. [📄 pdf](https://arxiv.org/pdf/1504.08083.pdf) [KD]

**[3.6]** Ren, Shaoqing, et al. "Faster R-CNN: Towards real-time object detection with region proposal networks." Advances in neural information processing systems. 2015. [📄 pdf](https://arxiv.org/pdf/1506.01497.pdf) [KD]

**[3.7]** Redmon, Joseph, et al. "You only look once: Unified, real-time object detection." arXiv preprint arXiv:1506.02640 (2015). [📄 pdf](https://arxiv.org/pdf/1506.02640.pdf) (YOLO) [MK]

**[3.8]** Liu, Wei, et al. "SSD: Single Shot MultiBox Detector." arXiv preprint arXiv:1512.02325 (2015). [📄 pdf](https://arxiv.org/pdf/1512.02325.pdf) [MK]

**[3.9]** Dai, Jifeng, et al. "R-FCN: Object Detection via Region-based Fully Convolutional Networks." arXiv preprint arXiv:1605.06409 (2016). [📄 pdf](https://arxiv.org/pdf/1605.06409.pdf)

**[3.10]** K. He et al. "Mask R-CNN" arXiv preprint arXiv:1703.06870 (2017). [📄 pdf](https://arxiv.org/pdf/1703.06870.pdf)

**[3.11]** Tsung-Yi Lin et al. "Feature Pyramid Networks for Object Detection." arXiv:1612.03144 (2017). [📄 pdf](https://arxiv.org/pdf/1612.03144.pdf)

**[3.12]** Kaiwen Duan, Song Bai, Lingxi Xie, Honggang Qi, Qingming Huang: "CenterNet: Keypoint Triplets for Object Detection", 2019; arXiv:1904.08189 [📄 pdf](https://arxiv.org/pdf/1904.08189.pdf)

### Segmentation

**[3.13]** J. Long, E. Shelhamer, and T. Darrell, "Fully convolutional networks for semantic segmentation." in CVPR, 2015. [📄 pdf](https://arxiv.org/pdf/1411.4038.pdf) [TB]

**[3.14]** O. Ronnenberger et al. "U-Net: Convolutional Networks for Biomedical Image Segmentation." 2015. [📄 pdf](https://arxiv.org/pdf/1505.04597.pdf)

**[3.15]** "Multi-Scale Context Aggregation by Dilated Convolutions." 2016. [📄 pdf](https://arxiv.org/pdf/1511.07122.pdf) [TB]

**[3.16]** (Deeplabv2) "DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs." 2016. [📄 pdf](https://arxiv.org/pdf/1606.00915.pdf)

**[3.17]** (DeepLabv3) "Rethinking Atrous Convolution for Semantic Image Segmentation." 2017. [📄 pdf](https://arxiv.org/pdf/1706.05587.pdf)

**[3.18 and 3.10]** K. He et al. "Mask R-CNN" arXiv preprint arXiv:1703.06870. 2017. [📄 pdf](https://arxiv.org/pdf/1703.06870.pdf) [IB]

**[3.19]** (DeepLabv3+) "Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation." 2018. [📄 pdf](https://arxiv.org/pdf/1802.02611.pdf)

**[3.20]** "Learning to Segment Everything." 2018. [📄 pdf](https://arxiv.org/pdf/1711.10370.pdf)

**[3.21]** "Segment Anything" 2023. [📄 pdf](https://arxiv.org/pdf/2304.02643.pdf) [IB]

---

## 4 Self-Supervised Learning
*Date: Feb 12, 2025*

**[4.0]** Supervised Learning Intro

**[4.1]** "A Simple Framework for Contrastive Learning of Visual Representations." 2020. [📄 pdf](https://arxiv.org/pdf/2002.05709.pdf) (SimCLR) [CR]

**[4.2]** "Adversarial Feature Learning." 2017. [📄 pdf](https://arxiv.org/pdf/1605.09782.pdf) [CR]

**[4.3]** "Learning Image Representations by Completing Damaged Jigsaw Puzzles." 2018. [📄 pdf](https://arxiv.org/pdf/1802.01880.pdf) [YA]

**[4.4]** "A Critical Analysis of Self-Supervision, or What We Can Learn From a Single Image." 2020. [📄 pdf](https://arxiv.org/pdf/1904.13132.pdf) [JZ]

**[4.5]** "Momentum Contrast for Unsupervised Visual Representation Learning" [📄 pdf](https://arxiv.org/pdf/1911.05722.pdf) (MoCo)

**[4.6]** "Bootstrap your own latent: A new approach to self-supervised learning." arXiv preprint arXiv:2006.07733 (2020) [📄 pdf](https://arxiv.org/pdf/2006.07733.pdf) (BYOL) [JZ]

**[4.7]** "Unsupervised Learning of Video Representations using LSTMs." 2015 [📄 pdf](https://arxiv.org/pdf/1502.04681.pdf) [NS]

**[4.8]** "Tracking Emerges by Colorizing Videos." 2018 [📄 pdf](https://arxiv.org/pdf/1806.09594.pdf) [NS]

**[4.9]** "Learning Correspondence from the Cycle-consistency of Time." 2019 [📄 pdf](https://arxiv.org/pdf/1903.07593.pdf)

**[4.10]** "Video Representation Learning by Dense Predictive Coding." 2019 [📄 pdf](https://arxiv.org/pdf/1909.04656.pdf) [YA]

**[4.11]** "Guarding Barlow Twins Against Overfitting with Mixed Samples", 2023 [📄 pdf](https://arxiv.org/pdf/2312.02151v1.pdf)

---

## 5 RNN / Sequence-to-Sequence Model
*Date: Feb 19, 2025*

**[5.0]** Bengio, Yoshua et. al. "A Neural Probabilistic Model" JMLR (2003). [📄 pdf](https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf)

**[5.1]** Graves, Alex. "Generating sequences with recurrent neural networks." arXiv preprint arXiv:1308.0850 (2013). [📄 pdf](https://arxiv.org/pdf/1308.0850.pdf) (LSTM) [RA]

**[5.2]** "Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation" EMNLP (2014) [📄 pdf](https://arxiv.org/pdf/1406.1078.pdf) (GRU) [RA]

**[5.3]** Mikolov, et al. "Distributed representations of words and phrases and their compositionality." NIPS(2013) [📄 pdf](https://papers.nips.cc/paper/5021-distributed-representations-of-words-and-phrases-and-their-compositionality.pdf) (word2vec) [AS]

**[5.4]** "GloVe: Global Vectors for Word Representation" EMNLP (2014) [📄 pdf](https://nlp.stanford.edu/pubs/glove.pdf) (Glove) [AS]

**[5.5]** Sutskever, Ilya, Oriol Vinyals, and Quoc V. Le. "Sequence to sequence learning with neural networks." Advances in neural information processing systems. 2014. [📄 pdf](https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf) [BP]

**[5.6]** Bahdanau, Dzmitry, KyungHyun Cho, and Yoshua Bengio. "Neural Machine Translation by Jointly Learning to Align and Translate." arXiv preprint arXiv:1409.0473 (2014). [📄 pdf](https://arxiv.org/pdf/1409.0473.pdf)

**[5.7]** Ashish Vaswani, et al. "Attention is All you Need" [📄 pdf](https://arxiv.org/pdf/1706.03762.pdf) (Transformer) [BP]

**[5.8]** Choromanski et al. "Rethinking Attention with Performers" (2020) [📄 pdf](https://arxiv.org/pdf/2009.14794.pdf) [HG]

**[5.9]** Cheng et al. "Masked-attention Mask Transformer for Universal Image Segmentation" (2022) [📄 pdf](https://arxiv.org/pdf/2112.01527.pdf)

**[5.10]** Tom B. Brown, et al. "Language Models are Few-Shot Learners" (2020) [📄 pdf](https://arxiv.org/pdf/2005.14165.pdf) (GPT-3)

**[5.11]** Long Ouyang, et al. "Training language models to follow instructions with human feedback" (2022) [📄 pdf](https://arxiv.org/pdf/2203.02155.pdf) (InstructGPT)

**[5.12]** Caron et al. "Emerging Properties in Self-Supervised Vision Transformers" (2021) [📄 pdf](https://arxiv.org/pdf/2104.14294.pdf) (DINO)

**[5.13]** Xiao et al. "Efficient Streaming Language Models with Attention Sinks" (2023) [📄 pdf](https://arxiv.org/pdf/2309.17453.pdf)

**[5.14]** Darcet et al. "Vision Transformers Need Registers" (2023) [📄 pdf](https://arxiv.org/pdf/2309.16588.pdf)

**[5.15]** "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" (2019) [📄 pdf](https://arxiv.org/pdf/1810.04805.pdf) [HG]

**[5.16]** Alec Redford et al. "Improving Language Understanding by Generative Pre-Training" (2018) [📄 pdf](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) (GPT-1)

---

## 6 Pre-trained Language Modeling
*Date: Feb 26, 2025*

**[6.0]** Matthew Peters, et al. "Deep Contexualized Word Representations" NAACL-HLT(2018) [📄 pdf](https://arxiv.org/pdf/1802.05365.pdf) (ELMo) [HG]

**[6.1]** Jeremy Howard, et al. "Universal Language Model Fine-Tuning for Text Classification" ACL (2018) [📄 pdf](https://arxiv.org/pdf/1801.06146.pdf) (ULMFiT)

**[6.2]** Jacob Devlin, et al. "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" NAACL-HLT(2019) [📄 pdf](https://arxiv.org/pdf/1810.04805.pdf) (BERT - Milestone) [HG]

**[6.3]** Radford, Alec, et al. "Improving language understanding by generative pre-training." (2018) [📄 pdf](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf) (GPT) [JZ]

**[6.4]** Nitish Shirish Keskar, Bryan McCann, et al. "CTRL: A Conditional Transformer Language Model for Controllable Generation." NeurIPS (2019) [📄 pdf](https://arxiv.org/pdf/1909.05858.pdf) (CTRL) [JZ]

**[6.5]** Victor Sanh, et al. "DistilBERT, a distilled version of BERT." arXiv preprint arXiv:1910.01108(2019) [📄 pdf](https://arxiv.org/pdf/1910.01108.pdf)

**[6.6]** Dong, Li, et al. "Unified language model pre-training for natural language understanding and generation." arXiv preprint arXiv:1905.03197 (2019) [📄 pdf](https://arxiv.org/pdf/1905.03197.pdf) (UniLM1)

**[6.7]** Bao, Hangbo, et al. "Unilmv2: Pseudo-masked language models for unified language model pre-training." International Conference on Machine Learning. PMLR, 2020. [📄 pdf](https://arxiv.org/pdf/2002.12804.pdf) (UniLM2)

**[6.8]** Hugo, Thibaut, et al. "LLaMA: Open and Efficient Foundation Language Models" [📄 pdf](https://arxiv.org/pdf/2302.13971.pdf)

**[6.9]** Hugo, Louis, et al. "Llama 2: Open Foundation and Fine-Tuned Chat Models" [📄 pdf](https://arxiv.org/pdf/2307.09288.pdf)

**[6.10]** Yuntao, Sourav, et al. "Constitutional AI: Harmlessness from AI Feedback" [📄 pdf](https://arxiv.org/pdf/2212.08073.pdf)

**[6.11]** Hakan, Kartikeya, et al. "Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations" [📄 pdf](https://arxiv.org/pdf/2312.06674.pdf)

**[6.12]** Brian, Rami, et al. "The Power of Scale for Parameter-Efficient Prompt Tuning" [📄 pdf](https://arxiv.org/pdf/2104.08691.pdf)

**[6.13]** Tim, Artidoro, et al. "QLORA: Efficient Finetuning of Quantized LLMs" [📄 pdf](https://arxiv.org/pdf/2305.14314.pdf)

**[6.14]** Liu, Yinhan, et al. "Roberta: A robustly optimized bert pretraining approach." arXiv preprint arXiv:1907.11692 (2019) [📄 pdf](https://arxiv.org/pdf/1907.11692.pdf) (RoBERTa) [AS]

**[6.15]** "Cross Lingual Language Model Pretraining" arXiv:1901.07291 (XLM) [📄 pdf](https://arxiv.org/pdf/1901.07291.pdf) [AS]

---

## 7 Efficient Fine-Tuning Techniques in Large Language Models
*Date: Mar 05, 2025*

**[7.1]** "Parameter-Efficient Transfer Learning for NLP" by Neil Houlsby et al. [📄 pdf](https://arxiv.org/pdf/1902.00751.pdf) (Adapter) [SC]

**[7.2]** "LoRA: Low-Rank Adaptation of Large Language Models" by Edward Hu, et al. [📄 pdf](https://arxiv.org/pdf/2106.09685.pdf) [SC]

**[7.3]** "QLoRA: Quantized Low-Rank Adaptation for Efficient Fine-Tuning of LLMs" by Tim Dettmers et al. [📄 pdf](https://arxiv.org/pdf/2305.14314.pdf) [SC]

---

## 8 Unlocking the Capabilities of Language Models
*Date: Mar 12, 2025*

**[8.0]** "Deep reinforcement learning from human preferences" by Paul Christiano, et al. [📄 pdf](https://arxiv.org/pdf/1706.03741.pdf) [SYK]

**[8.1]** "Language Models are Few-Shot Learners" by Tom B. Brown, et al. [📄 pdf](https://arxiv.org/pdf/2005.14165.pdf) (GPT-3) [IB]

**[8.2]** "Training language models to follow instructions with human feedback" by Long Ouyang, et al. [📄 pdf](https://arxiv.org/pdf/2203.02155.pdf) (InstructGPT) [SYK]

**[8.3]** "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" by DeepSeek-AI, et al. [📄 pdf](https://arxiv.org/pdf/2501.12948.pdf) [AM]

**[8.4]** "LLM Post-Training: A Deep Dive into Reasoning Large Language Models" by Komal Kumar, et al. [📄 pdf](https://arxiv.org/pdf/2501.01686.pdf) [LZ]

**[8.5]** "Humanity's Last Exam" by Long Phan, et al. [📄 pdf](https://arxiv.org/pdf/2412.20842.pdf) [JKD]

**[8.6]** "SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?" by Samuel Miserendino, et al. [📄 pdf](https://arxiv.org/pdf/2501.13479.pdf) [JKD]

---

## 9 Vision Transformer
*Date: April 9, 2025*

### ViT and Variants

**[9.0]** Dosovitskiy, Alexey, et al. "An image is worth 16x16 words: Transformers for image recognition at scale." ICLR(2021) [📄 pdf](https://arxiv.org/pdf/2010.11929.pdf) (ViT)

**[9.1]** Touvron, Hugo, et al. "Training data-efficient image transformers & distillation through attention." International Conference on Machine Learning. PMLR, 2021 [📄 pdf](https://arxiv.org/pdf/2012.12877.pdf) (DeiT)

**[9.2]** Yuan, Li, et al. "Tokens-to-token vit: Training vision transformers from scratch on imagenet." ICCV(2021) [📄 pdf](https://arxiv.org/pdf/2101.11986.pdf)

**[9.3]** Liu, Ze, et al. "Swin transformer: Hierarchical vision transformer using shifted windows." ICCV(2021) [📄 pdf](https://arxiv.org/pdf/2103.14030.pdf) (ICCV Best Paper)

**[9.4]** Wu, Haiping, et al. "Cvt: Introducing convolutions to vision transformers." ICCV(2021) [📄 pdf](https://arxiv.org/pdf/2103.15808.pdf)

**[9.5]** Trockman, Asher, et al. "Patches Are All You Need?" (2022) [📄 pdf](https://arxiv.org/pdf/2201.09792.pdf)

**[9.6]** "Vision Transformer Adapter for Dense Predictions" [📄 pdf](https://arxiv.org/pdf/2205.08534.pdf)

### ViT on Other Tasks

**[9.7]** Carion, Nicolas, et al. "End-to-end object detection with transformers." ECCV2020 [📄 pdf](https://arxiv.org/pdf/2005.12872.pdf) (DETR)

**[9.8]** Zheng, Sixiao, et al. "Rethinking semantic segmentation from a sequence-to-sequence perspective with transformers." CVPR2021 [📄 pdf](https://arxiv.org/pdf/2012.15840.pdf)

**[9.9]** Parmar, Niki, et al. "Image Transformer." International Conference on Machine Learning. PMLR2018 [📄 pdf](https://arxiv.org/pdf/1802.05751.pdf)

**[9.10]** Arnab, Anurag, et al. "ViViT: A video vision transformer." ICCV(2021) [📄 pdf](https://arxiv.org/pdf/2103.15691.pdf)

**[9.11]** "VisualBERT: A Simple and Performant Baseline for Vision and Language" (2019) [📄 pdf](https://arxiv.org/pdf/1908.03557.pdf)

**[9.12]** "ViLBERT: Pretraining Task-Agnostic Visiolinguistic Representations for Vision-and-Language Tasks" (2019) [📄 pdf](https://arxiv.org/pdf/1908.02265.pdf)

**[9.13]** "BLIP: Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation" [📄 pdf](https://arxiv.org/pdf/2201.12086.pdf)

**[9.14]** "ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision" [📄 pdf](https://arxiv.org/pdf/2102.03334.pdf)

**[9.15]** "Vision Transformer Adapter for Dense Predictions" [📄 pdf](https://arxiv.org/pdf/2205.08534.pdf)

---

## 10 3D Vision & Denoising Diffusion

**[10.1]** Mildenhall, et al. "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis." (2020) [📄 pdf](https://arxiv.org/pdf/2003.08934.pdf)

**[10.2]** Niemeyer, et. al. "RadSplat: Radiance Field-Informed Gaussian Splatting for Robust Real-Time Rendering with 900+ FPS." (2024) [📄 pdf](https://arxiv.org/pdf/2403.13806.pdf)

**[10.3]** Zhao, et al. "Point Transformer." (2021) [📄 pdf](https://arxiv.org/pdf/2012.09164.pdf)

**[10.4]** Park, et al. "DeepSDF: Learning Continuous Signed Distance Functions for Shape Representation." (2019) [📄 pdf](https://arxiv.org/pdf/1901.05103.pdf)

**[10.5]** Ho, et al. "Denoising Diffusion Probabilistic Models." (2020) [📄 pdf](https://arxiv.org/pdf/2006.11239.pdf)

**[10.6]** Dhariwal, et al. "Diffusion Models Beat GANs on Image Synthesis." (2021) [📄 pdf](https://arxiv.org/pdf/2105.05233.pdf)

**[10.7]** Rombach, et al. "High-Resolution Image Synthesis with Latent Diffusion Models (Stable Diffusion)." (2022) [📄 pdf](https://arxiv.org/pdf/2112.10752.pdf)

**[10.8]** Ramesh, et al. "Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2)." (2022) [📄 pdf](https://arxiv.org/pdf/2204.06125.pdf)

**[10.9]** Saharia, et al. "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding (Imagen)." (2022) [📄 pdf](https://arxiv.org/pdf/2205.11487.pdf)

**[10.10]** Zhang, et al. "Adding Conditional Control to Text-to-Image Diffusion Models (ControlNet)." (2023) [📄 pdf](https://arxiv.org/pdf/2302.05543.pdf)

---

## 11 Application of Language Modeling

**[11.0]** Lee, et al. "Fully Character-Level Neural Machine Translation without Explicit Segmentation". arXiv:1610.03017 (2016) [📄 pdf](https://arxiv.org/pdf/1610.03017.pdf)

**[11.1]** Wu, Schuster, Chen, Le, et al. "Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation". arXiv:1609.08144v2 (2016) [📄 pdf](https://arxiv.org/pdf/1609.08144.pdf)

**[11.2]** Jonas Gehring, et al. "Convolutional Sequence to Sequence Learning." arXiv:1705.03122 (2017) [📄 pdf](https://arxiv.org/pdf/1705.03122.pdf)

**[11.3]** Lample, et al. "Phrase-Based & Neural Unsupervised Machine Translation". arXiv:1804.07755 (2018) [📄 pdf](https://arxiv.org/pdf/1804.07755.pdf)

**[11.4]** Ye Jia, et al. "Direct Speech-to-Speech Translation with a Sequence-to-Sequence Model." arXiv:1904.06037 (2019) [📄 pdf](https://arxiv.org/pdf/1904.06037.pdf)

**[11.5]** Wen, et al. "Recurrent Neural Network Language Generation for Spoken Dialogue Systems". (2019) [📄 pdf](https://arxiv.org/pdf/1508.01745.pdf)

**[11.6]** Mrksic, et al. "Multi-domain Dialog State Tracking using RNNs". arXiv:1506.07190 (2015) [📄 pdf](https://arxiv.org/pdf/1506.07190.pdf)

**[11.7]** Srinivasan, et al. "Natural Language Generation using Reinforcement Learning with External Rewards." arXiv:1911.11404 (2019) [📄 pdf](https://arxiv.org/pdf/1911.11404.pdf)

**[11.8]** Zhu, et al. "SDNet: Contextualized Attention-based Deep Network for Conversational Question Answering". arXiv:1812.03593 (2018) [📄 pdf](https://arxiv.org/pdf/1812.03593.pdf)

**[11.9]** Xiong, et al. "Achieving Human Parity in Conversational Speech Recognition". arXiv:1610.05256 (2016) [📄 pdf](https://arxiv.org/pdf/1610.05256.pdf)

---

## 12 Vision-Language Learning

### Non-pretraining Models

**[12.0]** Farhadi, Ali, et al. "Every picture tells a story: Generating sentences from images". Computer Vision ECCV 2010 [📄 pdf](https://www.cs.cmu.edu/~afarhadi/papers/Sentence.pdf)

**[12.1]** Xu, Kelvin, et al. "Show, attend and tell: Neural image caption generation with visual attention". arXiv:1502.03044, 2015 [📄 pdf](https://arxiv.org/pdf/1502.03044.pdf)

**[12.2]** Fukui, Akira, et al. "Multimodal compact bilinear pooling for visual question answering and visual grounding." EMNLP 2016 [📄 pdf](https://arxiv.org/pdf/1606.01847.pdf)

### Pretraining Models

**[12.3]** Li, Liunian Harold, et al. "Visualbert: A simple and performant baseline for vision and language." arXiv:1908.03557 (2019) [📄 pdf](https://arxiv.org/pdf/1908.03557.pdf)

**[12.4]** Tan, Hao, and Mohit Bansal. "Lxmert: Learning cross-modality encoder representations from transformers." EMNLP(2019) [📄 pdf](https://arxiv.org/pdf/1908.07490.pdf)

**[12.5]** Chen, Yen-Chun, et al. "Uniter: Universal image-text representation learning." ECCV2020 [📄 pdf](https://arxiv.org/pdf/1909.11740.pdf)

**[12.6]** Cho, Jaemin, et al. "Unifying vision-and-language tasks via text generation." ICML2021 [📄 pdf](https://arxiv.org/pdf/2102.02779.pdf)

**[12.7]** Wang, Zirui, et al. "Simvlm: Simple visual language model pretraining with weak supervision." arXiv:2108.10904 [📄 pdf](https://arxiv.org/pdf/2108.10904.pdf)

**[12.8]** Radford, Alec, et al. "Learning transferable visual models from natural language supervision." ICML(2021) [📄 pdf](https://arxiv.org/pdf/2103.00020.pdf) (CLIP)

---

## 13 Reinforcement Learning
*Date: April 16, 2025*

**[13.0]** Mnih, Volodymyr, et al. "Playing atari with deep reinforcement learning." arXiv:1312.5602 (2013) [📄 pdf](https://arxiv.org/pdf/1312.5602.pdf) (DQN)

**[13.1]** Silver, David, et al. "Mastering the game of Go with deep neural networks and tree search." Nature 529.7587 (2016): 484-489 [📄 pdf](https://www.nature.com/articles/nature16961) (AlphaGo)

**[13.2]** Pathak, Deepak, et al. "Curiosity-driven Exploration by Self-supervised Prediction" ICML 2017 [📄 pdf](https://arxiv.org/pdf/1705.05363.pdf)

**[13.3]** OpenAI. "Learning Dexterous In-Hand Manipulation." [📄 pdf](https://arxiv.org/pdf/1808.00177.pdf)

**[13.4]** Byravan, Arunkumar "SE3-Nets: Learning Rigid Body Motion using Deep Neural Networks" [📄 pdf](https://arxiv.org/pdf/1606.02378.pdf)

**[13.5]** Lee, Michelle "Making Sense of Vision and Touch: Self-Supervised Learning of Multimodal Representations for Contact-Rich Tasks" [📄 pdf](https://arxiv.org/pdf/1810.10191.pdf)

**[13.6]** Shridhar, Mohit "CLIPORT: What and Where Pathways for Robotic Manipulation" [📄 pdf](https://arxiv.org/pdf/2109.12098.pdf)

**[13.7]** Xie, Annie "Learning Latent Representations to Influence Multi-Agent Interaction" [📄 pdf](https://arxiv.org/pdf/2011.06619.pdf)

**[13.8]** "Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor" [📄 pdf](https://arxiv.org/pdf/1801.01290.pdf) (SAC)

**[13.9]** Yao at al. "ReAct: Synergizing Reasoning and Acting in Language Models." [📄 pdf](https://arxiv.org/pdf/2210.03629.pdf)

**[13.10]** Du et al. "Improving Factuality and Reasoning in Language Models through Multiagent Debate." [📄 pdf](https://arxiv.org/pdf/2305.14325.pdf)

**[13.11]** "Optimising 5G infrastructure markets: The Business of Network Slicing" [📄 pdf](https://arxiv.org/pdf/1803.01830.pdf)

---

## 14 Deep Generative Model and Applications

### Generative Adversarial Networks

**[14a.0]** Kingma, D, and Welling, M. "Auto-encoding variational bayes." arXiv:1312.6114 (2013) [📄 pdf](https://arxiv.org/pdf/1312.6114.pdf) (VAE)

**[14a.1]** Goodfellow, Ian, et al. "Generative adversarial nets." 2014 [📄 pdf](https://arxiv.org/pdf/1406.2661.pdf) (GAN)

**[14a.2]** Oord, Aaron van den, et al. "Pixel recurrent neural networks." arXiv:1601.06759 (2016) [📄 pdf](https://arxiv.org/pdf/1601.06759.pdf) (PixelRNN)

**[14a.3]** Makhzani, Alireza, et al. "Adversarial Autoencoders" arXiv:1511.05644 (2015) [📄 pdf](https://arxiv.org/pdf/1511.05644.pdf)

**[14a.4]** Gregor, Karol, et al. "DRAW: A recurrent neural network for image generation." arXiv:1502.04623 (2015) [📄 pdf](https://arxiv.org/pdf/1502.04623.pdf)

**[14a.5]** Bosch, Marc ten. "N-Dimensional Rigid Body Dynamics." SIGGRAPH (2020) [📄 pdf](http://twvideo01.ubm-us.net/o1/vault/gdc2013/slides/822403Catto_Erin_PhysicsForGame.pdf)

### GAN Applications

**[14b.0]** "Wasserstein GAN." 2017 [📄 pdf](https://arxiv.org/pdf/1701.07875.pdf)

**[14b.1]** "Large Scale GAN Training for High Fidelity Natural Image Synthesis." 2018 [📄 pdf](https://arxiv.org/pdf/1809.11096.pdf) (BigGAN)

**[14b.2]** "A Style-based Generator Architecture for Generative Adversarial Networks" 2018 [📄 pdf](https://arxiv.org/pdf/1812.04948.pdf) (StyleGAN)

**[14b.3]** "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks" 2017 [📄 pdf](https://arxiv.org/pdf/1703.10593.pdf) (CycleGAN)

**[14b.4]** "Conditional LSTM-GAN for Melody Generation from Lyrics." 2019 [📄 pdf](https://arxiv.org/pdf/1908.05551.pdf)

**[14b.5]** "GANFIT: Generative Adversarial Network Fitting for High Fidelity 3D Face Reconstruction." 2019 [📄 pdf](https://arxiv.org/pdf/1902.05978.pdf)

**[14b.6]** "Image-to-Image Translation with Conditional Adversarial Networks." 2019 [📄 pdf](https://arxiv.org/pdf/1611.07004.pdf) (Pix2Pix)

### GAN Art and Music

**[14c.0]** Mordvintsev, et al. "Inceptionism: Going Deeper into Neural Networks". Google Research. 2015 [🔗 html](https://ai.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html) (Deep Dream)

**[14c.1]** Gatys, Leon A., et al. "A neural algorithm of artistic style." arXiv:1508.06576 (2015) [📄 pdf](https://arxiv.org/pdf/1508.06576.pdf) (Neural Style Transfer)

**[14c.2]** "CAN: Creative Adversarial Networks" 2017 [📄 pdf](https://arxiv.org/pdf/1706.07068.pdf)

**[14c.3]** "Semantic Image Synthesis with Spatially-Adaptive Normalization" 2019 [📄 pdf](https://arxiv.org/pdf/1903.07291.pdf) (SPADE)

**[14c.4]** "Deep Poetry: Word-Level and Char-Level Language Models for Shakespearean Sonnet Generation" [📄 pdf](https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1174/reports/2760185.pdf)

**[14c.5]** "BachProp: Learning to Compose Music in Multiple Styles" 2018 [📄 pdf](https://arxiv.org/pdf/1802.05162.pdf)

### Unsupervised Learning / Auto-Encoder

**[14e.0]** Le, Quoc V. "Building high-level features using large scale unsupervised learning." 2013 [📄 pdf](https://arxiv.org/pdf/1112.6209.pdf)

**[14e.1]** Kingma, et al. "Auto-encoding variational bayes." arXiv:1312.6114 (2013) [📄 pdf](https://arxiv.org/pdf/1312.6114.pdf) (VAE)

**[14e.2]** Oord, Aaron van den, et al. "Pixel recurrent neural networks." arXiv:1601.06759 (2016) [📄 pdf](https://arxiv.org/pdf/1601.06759.pdf) (PixelRNN)

**[14e.3]** Oord, Aaron van den, et al. "Conditional image generation with PixelCNN decoders." arXiv:1606.05328 (2016) [📄 pdf](https://arxiv.org/pdf/1606.05328.pdf) (PixelCNN)

---

## 15 Speech Recognition

**[15.0]** Hinton, Geoffrey, et al. "Deep neural networks for acoustic modeling in speech recognition." IEEE Signal Processing Magazine 29.6 (2012): 82-97 [📄 pdf](https://www.cs.toronto.edu/~gdahl/papers/deepSpeechReviewSPM2012.pdf)

**[15.1]** Graves, Alex, et al. "Speech recognition with deep recurrent neural networks." 2013 [📄 pdf](https://arxiv.org/pdf/1303.5778.pdf)

**[15.2]** Graves, Alex, and Navdeep Jaitly. "Towards End-To-End Speech Recognition with Recurrent Neural Networks." ICML 2014 [📄 pdf](http://proceedings.mlr.press/v32/graves14.pdf)

**[15.3]** Sak, Haşim, et al. "Fast and accurate recurrent neural network acoustic models for speech recognition." arXiv:1507.06947 (2015) [📄 pdf](https://arxiv.org/pdf/1507.06947.pdf)

**[15.4]** Amodei, Dario, et al. "Deep speech 2: End-to-end speech recognition in english and mandarin." arXiv:1512.02595 (2015) [📄 pdf](https://arxiv.org/pdf/1512.02595.pdf) (Baidu)

**[15.5]** W. Xiong, et al. "Achieving Human Parity in Conversational Speech Recognition." arXiv:1610.05256 (2016) [📄 pdf](https://arxiv.org/pdf/1610.05256.pdf) (Microsoft)

---

## 16 Deep Learning Optimization and More...

**[16.0]** Hinton, Geoffrey E., et al. "Improving neural networks by preventing co-adaptation of feature detectors." arXiv:1207.0580 (2012) [📄 pdf](https://arxiv.org/pdf/1207.0580.pdf) (Dropout)

**[16.1]** Srivastava, Nitish, et al. "Dropout: a simple way to prevent neural networks from overfitting." JMLR 15.1 (2014): 1929-1958 [📄 pdf](https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf)

**[16.2]** Ioffe, Sergey, and Christian Szegedy. "Batch normalization: Accelerating deep network training by reducing internal covariate shift." arXiv:1502.03167 (2015) [📄 pdf](https://arxiv.org/pdf/1502.03167.pdf) (Batch Normalization)

**[16.3]** Ba, Jimmy Lei, et al. "Layer normalization." arXiv:1607.06450 (2016) [📄 pdf](https://arxiv.org/pdf/1607.06450.pdf)

**[16.4]** Courbariaux, Matthieu, et al. "Binarized Neural Networks." [📄 pdf](https://arxiv.org/pdf/1602.02830.pdf)

**[16.5]** Jaderberg, Max, et al. "Decoupled neural interfaces using synthetic gradients." arXiv:1608.05343 (2016) [📄 pdf](https://arxiv.org/pdf/1608.05343.pdf)

**[16.6]** Chen, Tianqi, et al. "Net2net: Accelerating learning via knowledge transfer." arXiv:1511.05641 (2015) [📄 pdf](https://arxiv.org/pdf/1511.05641.pdf)

**[16.7]** Wei, Tao, et al. "Network Morphism." arXiv:1603.01670 (2016) [📄 pdf](https://arxiv.org/pdf/1603.01670.pdf)

**[16.8]** Sutskever, Ilya, et al. "On the importance of initialization and momentum in deep learning." ICML 2013 [📄 pdf](http://www.cs.toronto.edu/~hinton/absps/momentum.pdf) (Momentum)

**[16.9]** Kingma, Diederik, and Jimmy Ba. "Adam: A method for stochastic optimization." arXiv:1412.6980 (2014) [📄 pdf](https://arxiv.org/pdf/1412.6980.pdf) (Adam Optimizer)

**[16.10]** Andrychowicz, Marcin, et al. "Learning to learn by gradient descent by gradient descent." arXiv:1606.04474 (2016) [📄 pdf](https://arxiv.org/pdf/1606.04474.pdf)

**[16.11]** Han, Song, et al. "Deep compression: Compressing deep neural network with pruning, trained quantization and huffman coding." arXiv:1510.00149 (2015) [📄 pdf](https://arxiv.org/pdf/1510.00149.pdf)

**[16.12]** Iandola, Forrest N., et al. "SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and< 1MB model size." arXiv:1602.07360 (2016) [📄 pdf](https://arxiv.org/pdf/1602.07360.pdf)

---

## 17 Deep Transfer Learning / Lifelong Learning

**[17.0]** Bengio, Yoshua. "Deep Learning of Representations for Unsupervised and Transfer Learning." ICML 2012 [📄 pdf](http://proceedings.mlr.press/v27/bengio12a/bengio12a.pdf)

**[17.1]** Silver, Daniel L., et al. "Lifelong Machine Learning Systems: Beyond Learning Algorithms." AAAI 2013 [📄 pdf](https://www.aaai.org/ocs/index.php/SSS/SSS13/paper/viewFile/5802/5977)

**[17.2]** Hinton, Geoffrey, et al. "Distilling the knowledge in a neural network." arXiv:1503.02531 (2015) [📄 pdf](https://arxiv.org/pdf/1503.02531.pdf) (Knowledge Distillation)

**[17.3]** Rusu, Andrei A., et al. "Policy distillation." arXiv:1511.06295 (2015) [📄 pdf](https://arxiv.org/pdf/1511.06295.pdf)

**[17.4]** Parisotto, Emilio, et al. "Actor-mimic: Deep multitask and transfer reinforcement learning." arXiv:1511.06342 (2015) [📄 pdf](https://arxiv.org/pdf/1511.06342.pdf)

**[17.5]** Rusu, Andrei A., et al. "Progressive neural networks." arXiv:1606.04671 (2016) [📄 pdf](https://arxiv.org/pdf/1606.04671.pdf)

---

## 18 One Shot Deep Learning

**[18.0]** Lake, Brenden M., et al. "Human-level concept learning through probabilistic program induction." Science 350.6266 (2015): 1332-1338 [📄 pdf](https://web.mit.edu/cocosci/Papers/Science-2015-Lake-1332-8.pdf)

**[18.1]** Koch, Gregory, et al. "Siamese Neural Networks for One-shot Image Recognition." (2015) [📄 pdf](https://www.cs.cmu.edu/~rsalakhu/papers/oneshot1.pdf)

**[18.2]** Santoro, Adam, et al. "One-shot Learning with Memory-Augmented Neural Networks." arXiv:1605.06065 (2016) [📄 pdf](https://arxiv.org/pdf/1605.06065.pdf)

**[18.3]** Vinyals, Oriol, et al. "Matching Networks for One Shot Learning." arXiv:1606.04080 (2016) [📄 pdf](https://arxiv.org/pdf/1606.04080.pdf)

**[18.4]** Hariharan, Bharath, and Ross Girshick. "Low-shot visual object recognition." arXiv:1606.02819 (2016) [📄 pdf](https://arxiv.org/pdf/1606.02819.pdf)

---

## 19 Neural Turing Machine

**[19.0]** Graves, Alex, et al. "Neural turing machines." arXiv:1410.5401 (2014) [📄 pdf](https://arxiv.org/pdf/1410.5401.pdf)

**[19.1]** Zaremba, Wojciech, and Ilya Sutskever. "Reinforcement learning neural Turing machines." arXiv:1505.00521 (2015) [📄 pdf](https://arxiv.org/pdf/1505.00521.pdf)

**[19.2]** Weston, Jason, et al. "Memory networks." arXiv:1410.3916 (2014) [📄 pdf](https://arxiv.org/pdf/1410.3916.pdf)

**[19.3]** Sukhbaatar, Sainbayar, et al. "End-to-end memory networks." NIPS 2015 [📄 pdf](https://arxiv.org/pdf/1503.08895.pdf)

**[19.4]** Vinyals, Oriol, et al. "Pointer networks." NIPS 2015 [📄 pdf](https://arxiv.org/pdf/1506.03134.pdf)

**[19.5]** Graves, Alex, et al. "Hybrid computing using a neural network with dynamic external memory." Nature (2016) [📄 pdf](https://www.nature.com/articles/nature20101.pdf)

---

## 📖 Course Information

**Course**: Deep Learning for Computer Vision  
**Institution**: Columbia University  
**Website**: [https://www.deeplearningforcomputervision.com/](https://www.deeplearningforcomputervision.com/)

### Resources
- [Course Syllabus](https://www.deeplearningforcomputervision.com/syllabus.html)
- [Assignments and Resources](https://www.deeplearningforcomputervision.com/assignments-and-resources.html)

---

## 📝 Notes

- Papers are organized by topic and lecture date
- Each paper includes arXiv/conference link
- Presenter initials in brackets [XX] indicate student presenters
- ️ symbols indicate particularly influential papers
- This is a living document - papers may be updated as the course progresses

---

*Last Updated: November 2025*

